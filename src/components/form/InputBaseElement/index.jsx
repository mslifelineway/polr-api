import { Box, InputBase } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const InputBaseElement = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  type,
  error,
  style,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} style={{ ...style }}>
      <p className={classes.label}>{label}</p>
      <InputBase
        id={id}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={classes.input}
        autoComplete="off"
      />
      {error && <p className={classes.error}>{error}</p>}
    </Box>
  );
};

export default InputBaseElement;
