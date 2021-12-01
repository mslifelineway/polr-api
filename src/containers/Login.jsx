import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "../styles/login.styles";

const Login = () => {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
};

export default Login;
