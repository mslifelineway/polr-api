import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const SelectElement = ({
  id,
  label,
  value,
  onChange,
  error,
  options = [],
  ...rest
}) => {
  const classes = useStyles();

  const RenderOptions = () =>
    options.map((option, i) => (
      <option key={option + "_" + i} value={option}>
        {option}
      </option>
    ));

  return (
    <Box className={classes.root} {...rest}>
      <FormControl className={classes.formControl} id={id}>
        {label && <InputLabel htmlFor="age-native-helper">{label}</InputLabel>}
        <NativeSelect
          value={value}
          onChange={onChange}
          className={classes.select}
          disableUnderline
        >
          <RenderOptions />
        </NativeSelect>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default SelectElement;
