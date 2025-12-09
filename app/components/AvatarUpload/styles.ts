import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const UploadWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 60px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background.primary};
  cursor: pointer;
  overflow: hidden;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CameraOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28.57px;
  height: 28.79px;
  background-color: ${({ theme }) => theme.colors.interactive.primary};
  border: 2px solid ${({ theme }) => theme.colors.background.surface};
  border-radius: 70px;
  pointer-events: none;
`;

export const HiddenInput = styled.input`
  display: none;
`;
