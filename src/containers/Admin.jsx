import { Box, Typography } from "@material-ui/core";
import React from "react";
import { DataTable, Sidebar } from "../components";
import { adminLinksData, adminUsersData } from "../Data";

const Admin = () => {
  return (
    <Sidebar>
      <Typography variant="h5">Links</Typography>
      <DataTable
        rows={adminLinksData.rows}
        columns={adminLinksData.columns}
        width="80%"
      />
      <Box height={120} />
      <Typography variant="h5">Users</Typography>
      <DataTable
        rows={adminUsersData.rows}
        columns={adminUsersData.columns}
        width="80%"
      />
      <Box height={100} />
    </Sidebar>
  );
};

export default Admin;
