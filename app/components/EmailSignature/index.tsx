"use client";

import { useState, useEffect, useCallback } from "react";
import { InputVariables } from "../InputVariables";
import { RichTextEditor } from "../RichTextEditor";
import { Text } from "../Text";
import {
  EmailSignatureResponse,
  UpdateEmailSignatureRequest,
} from "@/app/services/settingsService";
import {
  Container,
  Header,
  Content,
  VariablesWrapper,
  EditorWrapper,
} from "./styles";

const extractVariables = (content: string): string[] => {
  const regex = /\{\{([^}]+)\}\}/g;
  const matches = content.match(regex);
  if (!matches) return [];
  return [...new Set(matches)];
};

interface Props {
  signature: EmailSignatureResponse | null;
  onChange: (signature: UpdateEmailSignatureRequest) => void;
}

export function EmailSignature({ signature, onChange }: Props) {
  const [content, setContent] = useState("");
  const [variables, setVariables] = useState<string[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (signature && !initialized) {
      setContent(signature.htmlContent);
      setVariables(extractVariables(signature.htmlContent));
      setInitialized(true);
    }
  }, [signature, initialized]);

  useEffect(() => {
    setVariables(extractVariables(content));
  }, [content]);

  const handleContentChange = useCallback(
    (newContent: string) => {
      setContent(newContent);
      onChange({ htmlContent: newContent });
    },
    [onChange]
  );

  return (
    <Container>
      <Header>
        <Text as="h2" size="lg" weight="medium">
          Assinatura de e-mail padrao
        </Text>
      </Header>
      <Content>
        <VariablesWrapper>
          <InputVariables title="Variaveis" variables={variables} />
        </VariablesWrapper>
        <EditorWrapper>
          <RichTextEditor
            value={content}
            onChange={handleContentChange}
            placeholder="Digite sua assinatura de e-mail..."
          />
        </EditorWrapper>
      </Content>
    </Container>
  );
}
