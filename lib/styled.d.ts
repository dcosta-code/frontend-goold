import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    colors: {
      brand: {
        primary: string;
      };
      background: {
        primary: string;
        secondary: string;
        surface: string;
        overlay: string;
        pagination: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        placeholder: string;
        inverse: string;
        error: string;
        badge: string;
        dark: string;
      };
      border: {
        default: string;
        focus: string;
      };
      interactive: {
        primary: string;
        primaryHover: string;
        disabled: string;
        disabledButton: string;
        toggleOff: string;
        danger: string;
        dangerBackground: string;
      };
      status: {
        online: string;
        waiting: {
          background: string;
          border: string;
          text: string;
        };
        inProgress: {
          background: string;
          border: string;
          text: string;
        };
        satisfied: {
          background: string;
          border: string;
          text: string;
        };
        responded: {
          border: string;
          background: string;
        };
        delayed: {
          border: string;
          background: string;
        };
        clienteEmEspera: {
          background: string;
          border: string;
          text: string;
        };
      };
      table: {
        row: {
          waiting: string;
          inProgress: string;
          satisfied: string;
        };
      };
      tags: {
        logistics: {
          background: string;
          border: string;
          text: string;
        };
        refund: {
          background: string;
          border: string;
          text: string;
        };
        other: {
          background: string;
          border: string;
          text: string;
        };
      };
      shadow: {
        light: string;
        medium: string;
        dark: string;
      };
      scrollbar: {
        thumb: string;
      };
      star: {
        filled: string;
        empty: string;
      };
    };
  }
}
