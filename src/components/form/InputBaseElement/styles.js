import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {},
  label: {
    fontSize: "1.2rem",
    letterSpacing: "0.05rem",
  },
  input: {
    border: "1px solid #ccc",
    width: "100%",
    padding: "0.2rem 1rem",
    marginTop: 10,
    fontFamily: "Fira Sans",
    letterSpacing: "0.05rem",
    fontSize: "1.2rem",
  },
  error: {
    color: theme.palette.error.main,
  },
}));
