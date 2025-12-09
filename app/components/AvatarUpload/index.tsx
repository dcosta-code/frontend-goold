"use client";

import { useRef } from "react";
import { CameraIcon } from "@/app/icons/CameraIcon";
import { UserAvatarIcon } from "@/app/icons/UserAvatarIcon";
import {
  Container,
  UploadWrapper,
  UploadButton,
  PhotoPreview,
  CameraOverlay,
  HiddenInput,
} from "./styles";

interface Props {
  photo: string | null;
  onPhotoChange: (photo: string | null) => void;
}

export function AvatarUpload({ photo, onPhotoChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Por favor, selecione apenas arquivos JPEG ou PNG.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onPhotoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <UploadWrapper>
        <UploadButton type="button" onClick={handleClick}>
          {photo ? (
            <PhotoPreview src={photo} alt="Preview" />
          ) : (
            <UserAvatarIcon width={59} height={79} />
          )}
        </UploadButton>
        <CameraOverlay>
          <CameraIcon width={14} height={14} color="white" />
        </CameraOverlay>
      </UploadWrapper>
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png"
        onChange={handleFileChange}
      />
    </Container>
  );
}
