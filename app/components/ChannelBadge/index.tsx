"use client";

import { Text } from "@/app/components/Text";
import { CommentIcon } from "@/app/icons/CommentIcon";
import { EnvelopeIcon } from "@/app/icons/EnvelopeIcon";
import { WhatsAppIcon } from "@/app/icons/WhatsAppIcon";
import { Container, IconWrapper } from "./styles";

type ChannelType = "whatsapp" | "chat" | "email";

interface Props {
  channel: ChannelType;
}

const channelConfig = {
  whatsapp: {
    icon: WhatsAppIcon,
    label: "WhatsApp",
  },
  chat: {
    icon: CommentIcon,
    label: "Chat Goold",
  },
  email: {
    icon: EnvelopeIcon,
    label: "E-mail",
  },
};

export function ChannelBadge({ channel }: Props) {
  const config = channelConfig[channel];
  const IconComponent = config.icon;

  return (
    <Container>
      <IconWrapper>
        <IconComponent width={11} height={11} />
      </IconWrapper>
      <Text size="xs" weight="medium" color="inverse">
        {config.label}
      </Text>
    </Container>
  );
}
