import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Fira Sans",
    color: "#fff",
    fontWeight: 700,
    fontSize: "1.2rem",
  },
}));

const ButtonElement = ({ text, onClick, color, style, ...rest }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color={color || "primary"}
      onClick={onClick}
      disableElevation
      fullWidth
      style={{ ...style }}
      className={classes.root}
    >
      {text}
    </Button>
  );
};

export default ButtonElement;
