import styled from "styled-components";
import { DefaultTheme } from "styled-components";

export const getModalStyles = (theme: DefaultTheme) => ({
  overlay: {
    backgroundColor: theme.colors.background.overlay,
    zIndex: 1000,
  },
  content: {
    top: 0,
    right: 0,
    bottom: 0,
    left: "auto",
    width: "850px",
    padding: 0,
    border: "none",
    borderRadius: 0,
    overflow: "auto",
    backgroundColor: theme.colors.background.surface,
  },
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 23px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  min-height: 105px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19px;
  height: 19px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

interface CreateButtonProps {
  $disabled?: boolean;
}

export const CreateButton = styled.button<CreateButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 44px;
  padding: 10px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? "#D5D5D5" : theme.colors.interactive.primary};
  border: none;
  border-radius: 10px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme, $disabled }) =>
      $disabled ? "#D5D5D5" : theme.colors.interactive.primaryHover};
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 32px 23px;
  overflow-y: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 12px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 30px;
`;

export const CardTitle = styled.div`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 19px;
  width: 100%;
`;

export const FormField = styled.div`
  flex: 1;
  min-width: 0;
`;

export const FormFieldHalf = styled.div`
  width: 354.5px;
`;

