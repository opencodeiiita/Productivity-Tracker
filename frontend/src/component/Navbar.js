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
    position: 'fixed',

    top: 0,
    left: 0,
    right: 0,
    zindex: 1071,
    backgroundColor: 'rgba(255, 255, 255, 0.7);'
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
    color: "black",
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
    <div>
      <AppBar position="fixed">
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Typography className={classes.logo}>
          <Link to="/" style={{ fontSize: "32px", textDecoration: "none", color: "Black", fontWeight: "600" }}>
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
    </div>
   
  );
}
export default Navbar;
