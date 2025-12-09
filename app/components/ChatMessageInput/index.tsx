"use client";

import { SendIcon } from "@/app/icons/SendIcon";
import {
  Container,
  InputWrapper,
  StyledInput,
  AttachButton,
  SendButton,
} from "./styles";
import { AttachChatIcon } from "@/app/icons/AttachChatIcon";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onAttach?: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatMessageInput({
  value,
  onChange,
  onSend,
  onAttach,
  placeholder = "Escreva uma mensagem",
  disabled = false,
}: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSend();
    }
  };

  const handleAttachClick = () => {
    if (onAttach) {
      onAttach();
    }
  };

  return (
    <Container>
      <InputWrapper>
        <StyledInput
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
        />
        <AttachButton
          type="button"
          onClick={handleAttachClick}
          $hasAction={!!onAttach}
          aria-label="Anexar arquivo"
        >
          <AttachChatIcon width={16} height={17} />
        </AttachButton>
      </InputWrapper>
      <SendButton
        type="button"
        onClick={onSend}
        disabled={disabled || !value.trim()}
        aria-label="Enviar mensagem"
      >
        <SendIcon width={17} height={17} />
      </SendButton>
    </Container>
  );
}
