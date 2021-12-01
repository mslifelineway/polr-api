import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTypography-body1": {
      color: theme.palette.text.color,
      fontSize: "1.2rem",
    },
    "& .MuiTypography-subtitle1": {
      color: theme.palette.text.color,
      fontSize: "1.2rem",
      "& a": {
        marginLeft: 10,
        color: "#7a8f08",
      },
    },
  },
}));
