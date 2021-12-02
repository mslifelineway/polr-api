import * as React from "react";
import { Box } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { InputElement } from "..";
import useStyles from "./styles";

const rowsPerPageOptions = [5, 10, 20];

export default function DataTable({
  rows = [],
  columns = [],
  width,
  height,
  style = {},
}) {
  const classes = useStyles();
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <Box width={width || "60%"} height={height || 400} style={style}>
      <div className="pull-right">
        <InputElement id="search" placeholder="Search..." />
      </div>
      <br />
      <DataGrid
        className={classes.dataGrid}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        disableSelectionOnClick
        pagination
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={rowsPerPageOptions}
        autoPageSize
        disableColumnMenu
      />
    </Box>
  );
}
