import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

export const withTheme = (children) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
