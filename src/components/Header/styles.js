import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    background: `linear-gradient(150deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    zIndex: 1600,
  },
  right: {
    marginLeft: "auto",
  },
  menuButton: {
    cursor: "pointer",
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  menu: {
    "& .MuiMenu-paper": {
      top: `${theme.mixins.toolbar.minHeight}px !important`,
      "& ul": {
        padding: 0,
        "& li": {
          padding: "1rem 2rem",
          textAlign: "center",
        },
      },
    },
  },
}));
