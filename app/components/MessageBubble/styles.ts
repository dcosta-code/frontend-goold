import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 14px 15px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 10px;
  flex: 1;
`;

export const MessageContent = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  word-wrap: break-word;

  p {
    margin: 0;
  }

  strong,
  b {
    font-weight: 600;
  }

  em,
  i {
    font-style: italic;
  }

  a {
    color: ${({ theme }) => theme.colors.interactive.primary};
    text-decoration: underline;
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }

  li {
    margin: 4px 0;
  }
`;
