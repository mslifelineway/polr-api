import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formControl: {
    "& .MuiNativeSelect-select": {
      width: "100px",
      border: "1px solid #ccc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
      margin: 0,
      textAlign: "center",
      padding: ".5rem 0rem",
      "& option": {
        fontSize: "1.4rem",
      },
    },
  },
}));
