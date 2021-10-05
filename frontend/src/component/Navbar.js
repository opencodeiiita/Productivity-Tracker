import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'red'
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "orange",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (

    <AppBar position="static">
      <CssBaseline />
      <Toolbar className= {classes.navbar}>
        <Typography  className={classes.logo}>
        <Link to="/" style ={ {fontSize: "35px",textDecoration: "none", color: "orange" }}>
          Productivity App
          </Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
