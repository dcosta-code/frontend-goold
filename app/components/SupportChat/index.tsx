"use client";

import { useRef, useState, useEffect } from "react";
import { SearchBar } from "../SearchBar";
import { InputDate } from "../InputDate";
import { RichTextEditor } from "../RichTextEditor";
import { Button } from "../Button";
import { Message } from "../Message";
import { AttachIcon } from "@/app/icons/AttachIcon";
import {
  Container,
  Header,
  SearchBarWrapper,
  InputDateWrapper,
  MessagesArea,
  EditorArea,
  EditorWrapper,
  Footer,
  AttachButton,
  HiddenFileInput,
  TemplateSelectWrapper,
  TemplateSelect,
  SendButtonWrapper,
} from "./styles";

interface MessageData {
  id: string;
  senderName: string;
  message: string;
  avatarSrc: string;
  isOnline?: boolean;
  timestamp: string;
  position: "left" | "right";
}

interface TemplateOptionData {
  value: string;
  label: string;
  content?: string;
}

const defaultTemplateOptions: TemplateOptionData[] = [
  {
    value: "greeting",
    label: "Saudacao inicial",
    content: "<p>Ola! Como posso ajuda-lo hoje?</p>",
  },
  {
    value: "delivery",
    label: "Status de entrega",
    content: "<p>Seu pedido esta a caminho e deve chegar em breve.</p>",
  },
  {
    value: "refund",
    label: "Reembolso",
    content:
      "<p>Seu reembolso foi processado e sera creditado em sua conta em ate 5 dias uteis.</p>",
  },
  {
    value: "thanks",
    label: "Agradecimento",
    content:
      "<p>Obrigado por entrar em contato. Estamos sempre a disposicao!</p>",
  },
];

interface Props {
  messages: MessageData[];
  onSendMessage: (content: string) => void;
  onAttachFile?: (file: File) => void;
  onSearchChange?: (value: string) => void;
  onDateChange?: (value: string) => void;
  searchValue?: string;
  dateValue?: string;
  templateOptions?: TemplateOptionData[];
  onTemplateSelect?: (value: string) => void;
}

export function SupportChat({
  messages,
  onSendMessage,
  onAttachFile,
  onSearchChange,
  onDateChange,
  searchValue,
  dateValue,
  templateOptions,
  onTemplateSelect,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [editorContent, setEditorContent] = useState("");

  const allTemplateOptions =
    templateOptions && templateOptions.length > 0
      ? templateOptions
      : defaultTemplateOptions;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAttachFile) {
      onAttachFile(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange?.(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange?.(e.target.value);
  };

  const handleSendMessage = () => {
    if (editorContent.trim()) {
      onSendMessage(editorContent);
      setEditorContent("");
    }
  };

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;

    const template = allTemplateOptions.find((t) => t.value === value);
    if (template?.content) {
      setEditorContent(template.content);
    }
    onTemplateSelect?.(value);
    e.target.value = "";
  };

  return (
    <Container>
      <Header>
        <SearchBarWrapper>
          <SearchBar
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Pesquise qualquer mensagem..."
          />
        </SearchBarWrapper>
        <InputDateWrapper>
          <InputDate value={dateValue} onChange={handleDateChange} />
        </InputDateWrapper>
      </Header>

      <MessagesArea>
        {messages.map((msg) => (
          <Message
            key={msg.id}
            senderName={msg.senderName}
            message={msg.message}
            avatarSrc={msg.avatarSrc}
            isOnline={msg.isOnline}
            timestamp={msg.timestamp}
            position={msg.position}
          />
        ))}
        <div ref={messagesEndRef} />
      </MessagesArea>

      <EditorArea>
        <EditorWrapper>
          <RichTextEditor
            value={editorContent}
            onChange={setEditorContent}
            placeholder="Digite sua mensagem..."
          />
        </EditorWrapper>
        <Footer>
          <AttachButton onClick={handleAttachClick} type="button">
            <AttachIcon />
          </AttachButton>
          <HiddenFileInput
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.webp"
          />
          <TemplateSelectWrapper>
            <TemplateSelect onChange={handleTemplateChange} defaultValue="">
              <option value="" disabled>
                Template de mensagem
              </option>
              {allTemplateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TemplateSelect>
          </TemplateSelectWrapper>
          <SendButtonWrapper>
            <Button onClick={handleSendMessage} size="small">
              Enviar
            </Button>
          </SendButtonWrapper>
        </Footer>
      </EditorArea>
    </Container>
  );
}
