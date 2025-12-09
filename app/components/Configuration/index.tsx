"use client";

import { useState, useCallback, useRef } from "react";
import { GeneralSettings } from "../GeneralSettings";
import { TagSettings } from "../TagSettings";
import { TemplateMessage } from "../TemplateMessage";
import { EmailSignature } from "../EmailSignature";
import { Button } from "../Button";
import { Text } from "../Text";
import { useSettings, useUpdateSettings } from "@/app/hooks/useSettings";
import {
  TagItemRequest,
  MessageTemplateItemRequest,
  UpdateEmailSignatureRequest,
} from "@/app/services/settingsService";
import {
  Container,
  ButtonWrapper,
  LoadingWrapper,
  FeedbackMessage,
} from "./styles";

export function Configuration() {
  const { data, isLoading, isError } = useSettings();
  const updateSettings = useUpdateSettings();

  const tagsRef = useRef<TagItemRequest[] | null>(null);
  const templatesRef = useRef<MessageTemplateItemRequest[] | null>(null);
  const signatureRef = useRef<UpdateEmailSignatureRequest | null>(null);

  const [feedbackMessage, setFeedbackMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleTagsChange = useCallback((tags: TagItemRequest[]) => {
    tagsRef.current = tags;
  }, []);

  const handleTemplatesChange = useCallback(
    (templates: MessageTemplateItemRequest[]) => {
      templatesRef.current = templates;
    },
    []
  );

  const handleSignatureChange = useCallback(
    (signature: UpdateEmailSignatureRequest) => {
      signatureRef.current = signature;
    },
    []
  );

  const handleSave = useCallback(() => {
    setFeedbackMessage(null);

    const payload: {
      tags?: TagItemRequest[];
      messageTemplates?: MessageTemplateItemRequest[];
      emailSignature?: UpdateEmailSignatureRequest;
    } = {};

    if (tagsRef.current) {
      payload.tags = tagsRef.current;
    }

    if (templatesRef.current) {
      payload.messageTemplates = templatesRef.current;
    }

    if (signatureRef.current) {
      payload.emailSignature = signatureRef.current;
    }

    if (Object.keys(payload).length === 0) {
      setFeedbackMessage({
        type: "error",
        text: "Nenhuma alteração para salvar.",
      });
      return;
    }

    updateSettings.mutate(payload, {
      onSuccess: () => {
        setFeedbackMessage({
          type: "success",
          text: "Configurações salvas com sucesso!",
        });
        tagsRef.current = null;
        templatesRef.current = null;
        signatureRef.current = null;
      },
      onError: () => {
        setFeedbackMessage({
          type: "error",
          text: "Erro ao salvar configuracoes. Tente novamente.",
        });
      },
    });
  }, [updateSettings]);

  if (isLoading) {
    return (
      <Container>
        <LoadingWrapper>
          <Text size="md" color="secondary">
            Carregando configurações...
          </Text>
        </LoadingWrapper>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <LoadingWrapper>
          <Text size="md" color="error">
            Erro ao carregar configurações.
          </Text>
        </LoadingWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <GeneralSettings />
      <TagSettings tags={data?.tags || []} onChange={handleTagsChange} />
      <TemplateMessage
        templates={data?.messageTemplates || []}
        onChange={handleTemplatesChange}
      />
      <EmailSignature
        signature={data?.emailSignature || null}
        onChange={handleSignatureChange}
      />
      <ButtonWrapper>
        {feedbackMessage && (
          <FeedbackMessage $type={feedbackMessage.type}>
            <Text size="sm" weight="medium">
              {feedbackMessage.text}
            </Text>
          </FeedbackMessage>
        )}
        <Button onClick={handleSave} disabled={updateSettings.isPending}>
          {updateSettings.isPending ? "Salvando..." : "Salvar alteracoes"}
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
