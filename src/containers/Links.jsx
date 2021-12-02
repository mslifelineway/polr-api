import React from "react";
import { DataTable, Sidebar } from "../components";
import { linksData } from "../Data";

const Links = () => {
  return (
    <Sidebar>
      <DataTable rows={linksData.rows} columns={linksData.columns} />
    </Sidebar>
  );
};

export default Links;
