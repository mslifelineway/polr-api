import { Typography } from "@material-ui/core";
import React from "react";
import { Sidebar } from "../components";

const Home = () => {
  return (
    <Sidebar>
      <Typography variant="h5">Welcome to your Smolr dashboard!</Typography>
      <br />
      <Typography variant="body1">
        Use the links on the left hand side to navigate your Smolr dashboard.
      </Typography>
    </Sidebar>
  );
};

export default Home;
