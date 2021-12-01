import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "../styles/login.styles";
import InputElement from "../components/form/InputElement";
import { ButtonElement } from "../components";

const defaultValues = {
  username: "",
  password: "",
};
const defaultErrors = {
  username: "",
  password: "",
};
const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultErrors);

  const onChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const login = () => {};

  return (
    <Box className={classes.root}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" align="center">
            Login
          </Typography>
          <Box height="40px" />
          <InputElement
            id="username"
            label="Username"
            value={formData.username}
            onChange={onChange}
            error={errors.username}
          />
          <Box height="10px" />
          <InputElement
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={onChange}
            error={errors.password}
          />
          <Box height="40px" />
          <ButtonElement text="Login" onClick={login} />
          <Box height="30px" />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
