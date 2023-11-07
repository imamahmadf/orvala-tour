import { createTheme } from "@mui/material";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#B83125",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    kuning: {
      main: "#FFC61C",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "merah" },
          style: {
            textTransform: "none",
            color: "#FFFFFF",
            backgroundColor: "#B83125",
            "&:hover": {
              backgroundColor: "#9F1E12",
            },
          },
        },
        {
          props: { variant: "kuning" },
          style: {
            textTransform: "none",
            color: "#FFFFFF",
            backgroundColor: "#FFC61C",
            "&:hover": {
              backgroundColor: "#E4B118",
            },
          },
        },
      ],
    },
  },
});
