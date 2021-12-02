import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  dataGrid: {
    "&  .MuiDataGrid-columnHeader": {
      outline: "none !important",
      fontFamily: "Fira Sans",
      fontSize: "1.2rem",
      "& .MuiDataGrid-columnHeaderTitle": {
        fontWeight: "700",
      },
    },
    "&  .MuiDataGrid-row	.MuiDataGrid-cell": {
      outline: "none !important",
      fontFamily: "Fira Sans",
    },
  },
}));
