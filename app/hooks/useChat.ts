import { useState, useCallback, useEffect, useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSocket } from "./useSocket";
import { useActiveTicket } from "./useActiveTicket";
import { useTicketMessages } from "./useTicketMessages";
import { createTicket, ChatMessageResponse } from "@/app/services/ticketService";

type MessageStatus = "sending" | "sent" | "error";

interface LocalMessage {
  tempId: string;
  externalId?: string;
  content: string;
  senderType: "customer";
  createdAt: string;
  status: MessageStatus;
}

interface UseChatReturn {
  messages: (ChatMessageResponse | LocalMessage)[];
  isLoading: boolean;
  isConnected: boolean;
  ticketId: string | null;
  sendMessage: (content: string) => void;
  retryMessage: (tempId: string) => void;
}

export function useChat(): UseChatReturn {
  const queryClient = useQueryClient();
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [localMessages, setLocalMessages] = useState<LocalMessage[]>([]);
  const [pendingFirstMessage, setPendingFirstMessage] = useState<string | null>(null);

  const { data: activeTicketData, isLoading: isLoadingActiveTicket } = useActiveTicket();
  const { data: messageHistory, isLoading: isLoadingMessages } = useTicketMessages(ticketId);

  const handleNewMessage = useCallback((message: ChatMessageResponse) => {
    if (message.senderType === "customer") {
      setLocalMessages((prev) => {
        const exists = prev.some(
          (m) => m.externalId === message.externalId || m.tempId === message.externalId
        );
        if (exists) return prev;
        return prev;
      });
    }
    queryClient.invalidateQueries({ queryKey: ["ticket-messages", ticketId] });
  }, [ticketId, queryClient]);

  const handleMessageStatus = useCallback((
    tempId: string,
    status: "sent" | "error",
    messageId?: string
  ) => {
    setLocalMessages((prev) =>
      prev.map((msg) =>
        msg.tempId === tempId
          ? { ...msg, status, externalId: messageId }
          : msg
      )
    );
  }, []);

  const {
    isConnected,
    connect,
    disconnect,
    joinRoom,
    leaveRoom,
    sendMessage: socketSendMessage,
  } = useSocket({
    onNewMessage: handleNewMessage,
    onMessageStatus: handleMessageStatus,
    onJoined: (id) => console.log("Joined room:", id),
    onError: (msg) => console.error("Socket error:", msg),
  });

  const createTicketMutation = useMutation({
    mutationFn: createTicket,
    onSuccess: (data) => {
      setTicketId(data.externalId);
      queryClient.invalidateQueries({ queryKey: ["active-ticket"] });
    },
  });

  useEffect(() => {
    if (activeTicketData?.hasActiveTicket && activeTicketData.ticketExternalId) {
      setTicketId(activeTicketData.ticketExternalId);
    }
  }, [activeTicketData]);

  useEffect(() => {
    if (ticketId) {
      connect();
    }
    return () => {
      if (ticketId) {
        leaveRoom(ticketId);
      }
      disconnect();
    };
  }, [ticketId, connect, disconnect, leaveRoom]);

  useEffect(() => {
    if (isConnected && ticketId) {
      joinRoom(ticketId);
    }
  }, [isConnected, ticketId, joinRoom]);

  useEffect(() => {
    if (ticketId && pendingFirstMessage && isConnected) {
      const tempId = `temp_${Date.now()}`;
      const newMessage: LocalMessage = {
        tempId,
        content: pendingFirstMessage,
        senderType: "customer",
        createdAt: new Date().toISOString(),
        status: "sending",
      };
      setLocalMessages((prev) => [...prev, newMessage]);
      socketSendMessage(ticketId, pendingFirstMessage, tempId);
      setPendingFirstMessage(null);
    }
  }, [ticketId, pendingFirstMessage, isConnected, socketSendMessage]);

  const sendMessage = useCallback((content: string) => {
    if (!content.trim()) return;

    if (!ticketId) {
      setPendingFirstMessage(content);
      createTicketMutation.mutate({ message: content });
      return;
    }

    const tempId = `temp_${Date.now()}`;
    const newMessage: LocalMessage = {
      tempId,
      content,
      senderType: "customer",
      createdAt: new Date().toISOString(),
      status: "sending",
    };

    setLocalMessages((prev) => [...prev, newMessage]);
    socketSendMessage(ticketId, content, tempId);
  }, [ticketId, createTicketMutation, socketSendMessage]);

  const retryMessage = useCallback((tempId: string) => {
    const message = localMessages.find((m) => m.tempId === tempId);
    if (!message || !ticketId) return;

    setLocalMessages((prev) =>
      prev.map((msg) =>
        msg.tempId === tempId ? { ...msg, status: "sending" } : msg
      )
    );

    socketSendMessage(ticketId, message.content, tempId);
  }, [localMessages, ticketId, socketSendMessage]);

  const messages = useMemo(() => {
    const history = messageHistory || [];
    const confirmedIds = new Set(history.map((m) => m.externalId));
    const pendingLocal = localMessages.filter(
      (m) => !m.externalId || !confirmedIds.has(m.externalId)
    );
    return [...history, ...pendingLocal];
  }, [messageHistory, localMessages]);

  return {
    messages,
    isLoading: isLoadingActiveTicket || isLoadingMessages,
    isConnected,
    ticketId,
    sendMessage,
    retryMessage,
  };
}
