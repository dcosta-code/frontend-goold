"use client";

import { Text } from "@/app/components/Text";
import {
  Container,
  MessageContent,
  Signature,
  SignatureLogo,
  SignatureInfo,
} from "./styles";

interface SignatureProps {
  name: string;
  role: string;
  logoSrc?: string;
}

interface Props {
  senderName: string;
  subject: string;
  message: string;
  signature?: SignatureProps;
}

export function EmailMessageBubble({
  senderName,
  subject,
  message,
  signature,
}: Props) {
  return (
    <Container>
      <Text size="md" weight="medium">
        {senderName}
      </Text>
      <Text size="lg" weight="medium" lineHeight="22px">
        {subject}
      </Text>
      <MessageContent dangerouslySetInnerHTML={{ __html: message }} />
      {signature && (
        <Signature>
          {signature.logoSrc && (
            <SignatureLogo src={signature.logoSrc} alt={signature.name} />
          )}
          <SignatureInfo>
            <Text size="sm" weight="bold" lineHeight="18px">
              {signature.name}
            </Text>
            <Text size="sm" weight="regular" lineHeight="18px">
              {signature.role}
            </Text>
          </SignatureInfo>
        </Signature>
      )}
    </Container>
  );
}
