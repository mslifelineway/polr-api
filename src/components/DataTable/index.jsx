import React, { useState, useEffect } from "react";
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
  const [pageSize, setPageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setTableData(rows);
  }, [rows]);

  useEffect(() => {
    if (searchTerm && searchTerm !== "") {
      const searchedData = rows.filter((row) => {
        return Object.keys(row).some(
          (k) =>
            row[k] &&
            row[k].toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setTableData(searchedData || []);
    } else {
      setTableData(rows);
    }
  }, [rows, searchTerm]);

  return (
    <Box width={width || "60%"} height={height || 400} style={style}>
      <div className="pull-right">
        <InputElement
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <br />
      <DataGrid
        className={classes.dataGrid}
        rows={tableData}
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
