import { Box } from "@material-ui/core";
import React from "react";
import { DataTable, Sidebar } from "../components";
import { adminLinksData, adminUsersData } from "../Data";

const Admin = () => {
  return (
    <Sidebar>
      <DataTable
        rows={adminLinksData.rows}
        columns={adminLinksData.columns}
        width="80%"
      />
      <Box height={120} />
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
