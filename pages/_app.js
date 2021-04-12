import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    blue: "#0070f3",
    text: "#333333",
    border: "#ccc",
    white: "#fff",
    error: "#ea6f6f",
  },
  fonts: {
    primary: "Roboto",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
