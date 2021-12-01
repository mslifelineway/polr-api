import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-input": {
      border: "1px solid #ccc",
      height: 35,
      padding: "0.5rem 1rem",
      fontFamily: "Fira Sans",
      letterSpacing: "0.05rem",
      minWidth: "300px",
      width: "100%",
    },
    "& .MuiInput-underline:before": {
      border: "none",
    },
    "& .MuiInput-underline:after": {
      border: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInputLabel-formControl": {
      transform: `translate(0px, 34px) scale(1)`,
      width: "100%",
      textAlign: "center",
    },
    "& .MuiInputLabel-formControl.Mui-focused": {
      transform: `translate(0, -3px) scale(1)`,
      textAlign: "left",
    },
    "& .MuiFormLabel-filled:not(filled)": {
      transform: `translate(0, -3px) scale(1)`,
      textAlign: "left",
    },
    "& .MuiFormHelperText-root": {
      color: theme.palette.secondary.main,
    },
  },
}));
