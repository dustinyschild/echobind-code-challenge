import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default MyApp;
