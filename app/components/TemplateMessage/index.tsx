"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { Input } from "../Input";
import { InputVariables } from "../InputVariables";
import { SearchBar } from "../SearchBar";
import { RichTextEditor } from "../RichTextEditor";
import { Text } from "../Text";
import { TrashIcon } from "@/app/icons/TrashIcon";
import { AddIcon } from "@/app/icons/AddIcon";
import {
  MessageTemplateResponse,
  MessageTemplateItemRequest,
} from "@/app/services/settingsService";
import {
  Container,
  Header,
  SearchWrapper,
  Content,
  TemplateItem,
  InputRow,
  InputWrapper,
  VariablesWrapper,
  DeleteButton,
  EditorWrapper,
  AddButton,
} from "./styles";

interface InternalTemplate {
  id: string;
  externalId: string | null;
  name: string;
  variables: string[];
  content: string;
}

const extractVariables = (content: string): string[] => {
  const regex = /\{\{([^}]+)\}\}/g;
  const matches = content.match(regex);
  if (!matches) return [];
  return [...new Set(matches)];
};

function mapResponseToInternal(
  templates: MessageTemplateResponse[]
): InternalTemplate[] {
  return templates.map((template) => ({
    id: template.externalId,
    externalId: template.externalId,
    name: template.name,
    content: template.htmlContent,
    variables: extractVariables(template.htmlContent),
  }));
}

function mapInternalToRequest(
  templates: InternalTemplate[]
): MessageTemplateItemRequest[] {
  return templates.map((template) => ({
    externalId: template.externalId,
    name: template.name,
    htmlContent: template.content,
  }));
}

interface Props {
  templates: MessageTemplateResponse[];
  onChange: (templates: MessageTemplateItemRequest[]) => void;
}

export function TemplateMessage({ templates: templatesProp, onChange }: Props) {
  const [templates, setTemplates] = useState<InternalTemplate[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (templatesProp && templatesProp.length > 0 && !initialized) {
      setTemplates(mapResponseToInternal(templatesProp));
      setInitialized(true);
    }
  }, [templatesProp, initialized]);

  const notifyChange = useCallback(
    (updatedTemplates: InternalTemplate[]) => {
      onChange(mapInternalToRequest(updatedTemplates));
    },
    [onChange]
  );

  const filteredTemplates = useMemo(() => {
    if (!searchQuery.trim()) {
      return templates;
    }
    return templates.filter((template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [templates, searchQuery]);

  const handleNameChange = (id: string, name: string) => {
    setTemplates((prev) => {
      const updated = prev.map((template) =>
        template.id === id ? { ...template, name } : template
      );
      notifyChange(updated);
      return updated;
    });
  };

  const handleContentChange = (id: string, content: string) => {
    const extractedVariables = extractVariables(content);
    setTemplates((prev) => {
      const updated = prev.map((template) =>
        template.id === id
          ? { ...template, content, variables: extractedVariables }
          : template
      );
      notifyChange(updated);
      return updated;
    });
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates((prev) => {
      const updated = prev.filter((template) => template.id !== id);
      notifyChange(updated);
      return updated;
    });
  };

  const handleAddTemplate = () => {
    const newId = `new-${Date.now()}`;
    setTemplates((prev) => {
      const updated = [
        ...prev,
        {
          id: newId,
          externalId: null,
          name: "",
          variables: [],
          content: "",
        },
      ];
      notifyChange(updated);
      return updated;
    });
  };

  return (
    <Container>
      <Header>
        <Text as="h2" size="lg" weight="medium">
          Templates de mensagem ({templates.length})
        </Text>
      </Header>
      <SearchWrapper>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filtre pelo nome do template"
        />
      </SearchWrapper>
      <Content>
        {filteredTemplates.map((template) => (
          <TemplateItem key={template.id}>
            <InputRow>
              <InputWrapper>
                <Input
                  title="Nome do template"
                  value={template.name}
                  onChange={(e) =>
                    handleNameChange(template.id, e.target.value)
                  }
                  placeholder="Nome do template"
                />
              </InputWrapper>
              <VariablesWrapper>
                <InputVariables
                  title="Variaveis"
                  variables={template.variables}
                />
              </VariablesWrapper>
              <DeleteButton
                type="button"
                onClick={() => handleDeleteTemplate(template.id)}
                aria-label="Excluir template"
              >
                <TrashIcon />
              </DeleteButton>
            </InputRow>
            <EditorWrapper>
              <RichTextEditor
                value={template.content}
                onChange={(content) =>
                  handleContentChange(template.id, content)
                }
                placeholder="Digite o conteudo do template..."
              />
            </EditorWrapper>
          </TemplateItem>
        ))}
        <AddButton type="button" onClick={handleAddTemplate}>
          <AddIcon />
          <Text size="md" weight="medium">
            Adicionar novo template
          </Text>
        </AddButton>
      </Content>
    </Container>
  );
}
