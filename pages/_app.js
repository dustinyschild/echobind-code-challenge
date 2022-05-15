import { createGlobalStyle, ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#fafafa;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
}
`;

const theme = {
  colors: {
    primary: "#fafafa"
  }
};

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
