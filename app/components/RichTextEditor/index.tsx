"use client";

import { useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { Container } from "./styles";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface Props {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export function RichTextEditor({ value, onChange, placeholder }: Props) {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Digite o conteudo do template...",
      height: 350,
      toolbarButtonSize: "small" as const,
    }),
    [placeholder]
  );

  return (
    <Container>
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={() => {}}
        onChange={(newContent) => onChange(newContent)}
      />
    </Container>
  );
}
