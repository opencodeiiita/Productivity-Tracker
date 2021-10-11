import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, createTheme } from "@material-ui/core/styles";
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
 
  },
  drawer: {
    [theme.breakpoints.up("smDown")]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("963")]: {
      display: "none",
    },
  },
  toolbar1:{
     width:'50px',
     height:'50px',
     padding:'10px',
     borderRadius:'50%',
     position:'absolute',
     top:'55px',
     left:'10px',
     
  },
  drawerPaper: {
    height:'42vh',
    margin:'29vh 0',
    width: drawerWidth,
    color:'#3eb6ef',
     backgroundColor:'#5e5e5e',
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
    
  }, 
}));

 
export default function Persistentd(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button key="notes" >
          <ListItemText align="center" primary="Notes" />
        </ListItem>
        <ListItem button key="Todolist">
          <ListItemText align="center" primary="Todo List" />
        </ListItem>
        <ListItem button key="reminder">
          <ListItemText align="center" primary="Reminders" />
        </ListItem>
        <ListItem button key="Stopwatch">
          <ListItemText align="center" primary="StopWatch" />
        </ListItem>
        <ListItem button key="Stats">
          
          <ListItemText  align="center" primary="Stats" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
       <div className={classes.root}>
        
        <Toolbar  className={classes.toolbar1}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      
      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    
    </div>
    </>
  )
}