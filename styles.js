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

const colors = {
  darkGrey: "#202329",
  grey: "#24282F",
  lightGrey: "#3C3E44",
  yellow: "#FF9800",
  white: "#FFFFFF",
  offWhite: "#F5F5F5",
  green: "#55CC44",
  orange: "#D63D2E"
};

export const theme = {
  page: {
    header: {
      text: colors.darkGrey,
      background: colors.white,
      highlightText: colors.yellow,
      highlightBackground: colors.darkGrey
    },
    body: {
      background: colors.grey
    },
    footer: {
      background: colors.darkGrey
    },
    card: {
      text: colors.offWhite,
      textHighlight: colors.yellow,
      background: colors.lightGrey
    },
    status: {
      dead: colors.orange,
      alive: colors.green,
      unknown: colors.lightGrey
    }
  }
};
