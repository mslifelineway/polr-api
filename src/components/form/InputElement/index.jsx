import { TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const InputElement = ({ id, label, onChange, value, error, ...rest }) => {
  const classes = useStyles();

  return (
    <TextField
      id={id}
      label={label}
      helperText={error}
      onChange={onChange}
      value={value}
      className={classes.root}
      autoComplete="off"
      {...rest}
    />
  );
};

export default InputElement;
