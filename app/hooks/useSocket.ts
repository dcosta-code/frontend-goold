import { useEffect, useRef, useCallback, useState } from "react";
import { io, Socket } from "socket.io-client";
import { authStorage } from "@/app/utils/authStorage";

interface ChatMessageData {
  externalId: string;
  ticketExternalId: string;
  senderType: "customer" | "employee";
  senderId: number;
  content: string;
  createdAt: string;
}

interface ChatEvent {
  type: "joined" | "left" | "error" | "message_status" | "new_message";
  ticketId?: string;
  message?: string;
  tempId?: string;
  status?: "sent" | "error";
  messageId?: string;
  data?: ChatMessageData;
}

interface UseSocketOptions {
  onJoined?: (ticketId: string) => void;
  onNewMessage?: (message: ChatMessageData) => void;
  onMessageStatus?: (tempId: string, status: "sent" | "error", messageId?: string, errorMessage?: string) => void;
  onError?: (message: string) => void;
  onConnectionError?: (error: Error) => void;
}

export function useSocket(options: UseSocketOptions = {}) {
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(() => {
    if (socketRef.current?.connected) return;

    const token = authStorage.getCustomerAccessToken();
    if (!token) {
      options.onConnectionError?.(new Error("No auth token"));
      return;
    }

    setIsConnecting(true);

    socketRef.current = io(process.env.NEXT_PUBLIC_WS_URL || "http://localhost:3000", {
      auth: { token },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socketRef.current.on("connect", () => {
      setIsConnected(true);
      setIsConnecting(false);
    });

    socketRef.current.on("disconnect", () => {
      setIsConnected(false);
    });

    socketRef.current.on("connect_error", (error) => {
      setIsConnecting(false);
      setIsConnected(false);
      options.onConnectionError?.(error);
    });

    socketRef.current.on("chat_event", (event: ChatEvent) => {
      switch (event.type) {
        case "joined":
          options.onJoined?.(event.ticketId!);
          break;
        case "new_message":
          if (event.data) {
            options.onNewMessage?.(event.data);
          }
          break;
        case "message_status":
          options.onMessageStatus?.(
            event.tempId!,
            event.status!,
            event.messageId,
            event.message
          );
          break;
        case "error":
          options.onError?.(event.message!);
          break;
      }
    });
  }, [options]);

  const disconnect = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
      setIsConnected(false);
    }
  }, []);

  const joinRoom = useCallback((ticketId: string) => {
    socketRef.current?.emit("join", { ticketId });
  }, []);

  const leaveRoom = useCallback((ticketId: string) => {
    socketRef.current?.emit("leave", { ticketId });
  }, []);

  const sendMessage = useCallback((ticketId: string, content: string, tempId: string) => {
    socketRef.current?.emit("send_message", { ticketId, content, tempId });
  }, []);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return {
    isConnected,
    isConnecting,
    connect,
    disconnect,
    joinRoom,
    leaveRoom,
    sendMessage,
  };
}
