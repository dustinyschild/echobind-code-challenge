import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  margin: 0;
  padding: 0;
}

body{
  margin: 0;
  font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
}
`;

export const theme = {
  page: {
    header: {
      text: "#202329",
      background: "#FFFFFF",
      highlightText: "#FF9800",
      highlightBackground: "#202329"
    },
    body: {
      background: "#24282F"
    },
    footer: {
      background: "#202329"
    },
    card: {
      text: "#F5F5F5",
      textHighlight: "#FF9800",
      background: "#3C3E44"
    },
    status: {
      dead: "#D63D2E",
      alive: "#55CC44",
      unknown: "#9E9E9E"
    }
  }
};
