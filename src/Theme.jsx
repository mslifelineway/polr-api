import { createTheme } from "@material-ui/core";
const Theme = createTheme({
  palette: {
    primary: {
      main: "#29B6F6",
      light: "#81D6D0",
      dark: "#049AB8",
      color: "#D8FEFA",
    },
    text: {
      primary: "#444444",
      color: "#2F1D1D",
    },
  },
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
  },
  mixins: {
    toolbar: {
      minHeight: 80,
    },
  },
});

export default Theme;
