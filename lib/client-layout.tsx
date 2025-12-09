"use client";

import { ReactNode } from "react";
import { ThemeProvider, createGlobalStyle, type DefaultTheme } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: var(--font-montserrat), 'Montserrat', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const theme: DefaultTheme = {
  fontFamily: "Montserrat",
  colors: {
    brand: {
      primary: "#201B21",
    },

    background: {
      primary: "#F6F4F1",
      secondary: "#FAFAFA",
      surface: "#FFFFFF",
      overlay: "rgba(0, 0, 0, 0.5)",
      pagination: "#FFFBFC",
    },

    text: {
      primary: "#000000",
      secondary: "#999999",
      tertiary: "#878787",
      placeholder: "#7D7D7D",
      inverse: "#FFFFFF",
      error: "#DC2626",
      badge: "#FFFDF6",
      dark: "#0B282B",
    },

    border: {
      default: "#D7D7D7",
      focus: "#000000",
    },

    interactive: {
      primary: "#000000",
      primaryHover: "#1A1A1A",
      disabled: "#F5F5F5",
      disabledButton: "#D5D5D5",
      toggleOff: "#CFCFCF",
      danger: "#EA0000",
      dangerBackground: "#FFE1E1",
    },

    status: {
      online: "#00B386",
      waiting: {
        background: "#D5B032",
        border: "#D5B032",
        text: "#263238",
      },
      inProgress: {
        background: "#FFFAE8",
        border: "#D5B032",
        text: "#D5B032",
      },
      satisfied: {
        background: "#E5FFF9",
        border: "#00B386",
        text: "#00B386",
      },
      responded: {
        border: "#00B386",
        background: "#00B386",
      },
      delayed: {
        border: "#E53935",
        background: "#E53935",
      },
      clienteEmEspera: {
        background: "#EEEEEE",
        border: "#787486",
        text: "#263238",
      },
    },

    table: {
      row: {
        waiting: "#FFF2F4",
        inProgress: "#FFFDF6",
        satisfied: "#F0FFFC",
      },
    },

    tags: {
      logistics: {
        background: "#FFF4E4",
        border: "#D5B032",
        text: "#D5B032",
      },
      refund: {
        background: "#FFF3F3",
        border: "#D9032C",
        text: "#EA0000",
      },
      other: {
        background: "#EFEFEF",
        border: "#787486",
        text: "#787486",
      },
    },

    shadow: {
      light: "rgba(0,0,0,0.1)",
      medium: "rgba(0,0,0,0.2)",
      dark: "rgba(0,0,0,0.25)",
    },

    scrollbar: {
      thumb: "rgba(0,0,0,0.33)",
    },

    star: {
      filled: "#000000",
      empty: "#E0E0E0",
    },
  },
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </ThemeProvider>
  );
}
