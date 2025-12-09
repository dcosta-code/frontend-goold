"use client";

import { useState, useEffect, useCallback } from "react";
import { Input } from "../Input";
import { ColorInput } from "../ColorInput";
import { Text } from "../Text";
import { TrashIcon } from "@/app/icons/TrashIcon";
import { AddIcon } from "@/app/icons/AddIcon";
import {
  TagResponse,
  TagItemRequest,
} from "@/app/services/settingsService";
import {
  Container,
  Header,
  Content,
  TagRow,
  NameInputWrapper,
  DeleteButton,
  AddButton,
} from "./styles";

interface InternalTag {
  id: string;
  externalId: string | null;
  name: string;
  bgColor: string;
  textColor: string;
}

function removeHashFromColor(color: string): string {
  return color.startsWith("#") ? color.slice(1) : color;
}

function addHashToColor(color: string): string {
  return color.startsWith("#") ? color : `#${color}`;
}

function mapResponseToInternal(tags: TagResponse[]): InternalTag[] {
  return tags.map((tag) => ({
    id: tag.externalId,
    externalId: tag.externalId,
    name: tag.name,
    bgColor: removeHashFromColor(tag.backgroundColor),
    textColor: removeHashFromColor(tag.textColor),
  }));
}

function mapInternalToRequest(tags: InternalTag[]): TagItemRequest[] {
  return tags.map((tag) => ({
    externalId: tag.externalId,
    name: tag.name,
    backgroundColor: addHashToColor(tag.bgColor),
    textColor: addHashToColor(tag.textColor),
  }));
}

interface Props {
  tags: TagResponse[];
  onChange: (tags: TagItemRequest[]) => void;
}

export function TagSettings({ tags: tagsProp, onChange }: Props) {
  const [tags, setTags] = useState<InternalTag[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (tagsProp && tagsProp.length > 0 && !initialized) {
      setTags(mapResponseToInternal(tagsProp));
      setInitialized(true);
    }
  }, [tagsProp, initialized]);

  const notifyChange = useCallback(
    (updatedTags: InternalTag[]) => {
      onChange(mapInternalToRequest(updatedTags));
    },
    [onChange]
  );

  const handleNameChange = (id: string, name: string) => {
    setTags((prev) => {
      const updated = prev.map((tag) =>
        tag.id === id ? { ...tag, name } : tag
      );
      notifyChange(updated);
      return updated;
    });
  };

  const handleBgColorChange = (id: string, bgColor: string) => {
    setTags((prev) => {
      const updated = prev.map((tag) =>
        tag.id === id ? { ...tag, bgColor } : tag
      );
      notifyChange(updated);
      return updated;
    });
  };

  const handleTextColorChange = (id: string, textColor: string) => {
    setTags((prev) => {
      const updated = prev.map((tag) =>
        tag.id === id ? { ...tag, textColor } : tag
      );
      notifyChange(updated);
      return updated;
    });
  };

  const handleDeleteTag = (id: string) => {
    setTags((prev) => {
      const updated = prev.filter((tag) => tag.id !== id);
      notifyChange(updated);
      return updated;
    });
  };

  const handleAddTag = () => {
    const newId = `new-${Date.now()}`;
    setTags((prev) => {
      const updated = [
        ...prev,
        {
          id: newId,
          externalId: null,
          name: "",
          bgColor: "FFFFFF",
          textColor: "000000",
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
          Tags ({tags.length})
        </Text>
      </Header>
      <Content>
        {tags.map((tag) => (
          <TagRow key={tag.id}>
            <NameInputWrapper>
              <Input
                title="Nome da Tag"
                value={tag.name}
                onChange={(e) => handleNameChange(tag.id, e.target.value)}
                placeholder="Nome da tag"
              />
            </NameInputWrapper>
            <ColorInput
              label="Cor do fundo"
              value={tag.bgColor}
              onChange={(value) => handleBgColorChange(tag.id, value)}
            />
            <ColorInput
              label="Cor do texto"
              value={tag.textColor}
              onChange={(value) => handleTextColorChange(tag.id, value)}
            />
            <DeleteButton
              type="button"
              onClick={() => handleDeleteTag(tag.id)}
              aria-label="Excluir tag"
            >
              <TrashIcon />
            </DeleteButton>
          </TagRow>
        ))}
        <AddButton type="button" onClick={handleAddTag}>
          <AddIcon />
          <Text size="md" weight="medium">
            Adicionar nova tag
          </Text>
        </AddButton>
      </Content>
    </Container>
  );
}
