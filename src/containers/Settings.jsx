import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ButtonElement, InputBaseElement, Sidebar } from "../components";

const Settings = () => {
  return (
    <Sidebar>
      <Typography variant="h5">Change Password</Typography>
      <Box style={{ width: 350 }}>
        <InputBaseElement
          id="oldPassword"
          label="Old Password"
          style={{ marginTop: 35 }}
        />
        <InputBaseElement
          id="nwePassword"
          label="New Password"
          style={{ marginTop: 20 }}
        />
        <ButtonElement
          text="Save"
          style={{ marginTop: 40, width: 100, background: "#7a8f08" }}
        />
      </Box>
    </Sidebar>
  );
};

export default Settings;
