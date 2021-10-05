import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "orange",
        fontSize: "20px",
        "&:hover": {
          color: "orange",
          borderBottom: "1px solid white",
        },
    },
    icon:{
        color: "white",
        cursor: "pointer",
        "&:hover": {
          color: "orange",
          transform: "rotate(180deg)",
          transition: "1s ease-in-out",
     },
    },
    iconbtn: {
        "&:hover": {
          transform: "rotate(180)",
          transition: "3s ease-in-out",
     },
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List style = {{backgroundColor: "red"}} >
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            </ListItemText> 
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
          </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
          <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/login" className={classes.link}>
              Login
            </Link>        
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon ></MenuIcon>
      </IconButton>
    </>
  );
}
export default DrawerComponent;
