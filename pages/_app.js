import "@/styles/globals.css";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";
import { theme } from "@/styles/Theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        {" "}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>{" "}
    </>
  );
}
