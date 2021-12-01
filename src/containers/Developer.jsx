import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Sidebar, ButtonElement } from "../components";
import useStyles from "../styles/developer.styles";

const Developer = () => {
  const classes = useStyles();

  return (
    <Sidebar>
      <Box className={classes.root}>
        <Typography variant="h5">Developer</Typography>
        <br />
        <Typography variant="body1">
          API keys and documentation for developers.
        </Typography>
        <Typography variant="subtitle1">
          Documentation
          <a href="http://docs.polr.me/en/latest/developer-guide/api/">
            http://docs.polr.me/en/latest/developer-guide/api/
          </a>
        </Typography>
        <br />
        <Typography variant="h6">API Key:</Typography>
        <Box display="flex" alignItems="stretch" height={40} marginTop={1}>
          <Typography variant="body1" className="inputBg">
            27365d9bbb5b682045897b52b6bd73
          </Typography>
          <ButtonElement
            text="Reset"
            color="secondary"
            size="small"
            style={{ width: 100, fontSize: 16, marginLeft: 15 }}
          />
        </Box>
        <br />
        <Typography variant="h6">API Quota:</Typography>
        <Box display="flex" alignItems="center" height={40} marginTop={2}>
          <Typography
            variant="body1"
            className="inputBg"
            style={{ marginRight: 10, color: "red", fontSize: "1.5rem" }}
          >
            60
          </Typography>
          <Typography variant="body1">requests per minute</Typography>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default Developer;
