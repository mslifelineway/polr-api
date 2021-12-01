import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    backgroundRepeat: "no-repeat",
  },
  cardContent: {
    padding: "2rem 4rem",
  },
}));
