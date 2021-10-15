import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Navbar from "./Navbar";
import Footer from './Footer'
import zIndex from "@mui/material/styles/zIndex";
import { List } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotesIcon from '@mui/icons-material/Notes';
import EventIcon from '@mui/icons-material/Event';
import TimerIcon from '@mui/icons-material/Timer';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DashboardGraph from "./DashboardGraph";
import Todo from "./Todo/todo";
import { Link } from "react-router-dom";

const UseStyles = makeStyles({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
  },
  appBar: {
    background: "#00022E",
    color: "#FC86AA",
  },
  icon: {
    padding: "10px",
    zIndex:'100000'
  },
  title: {
    margin: "auto",
  },
  container: {
    display: "flex",
    flex: 1,
  },
  drawer: {
    background: "#D8DCD6",
    position: "static",
    transition: "width .7s",
  },
  closed: {
    width: "0px",
  },
  opened: {
    width: "240px",
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
  },
  footer: {
    background: "#00022E",
    height: "50px",
    color: "#FC86AA",
  },
  widthc:{
    width:'80vw',
    zIndex:'-5'
  }
});



export default function PersistentDrawerLeft(props) {
  // console.log(props);
  const classes = UseStyles();
  const [isOpened, setIsOpened] = useState(false);
  const foropen = ()=>{
    console.log(isOpened);
    if(isOpened===false){
      setIsOpened(true);
      props.func();
  
    }
    else{
       setIsOpened(false);
       props.func();
      }
      console.log(isOpened);
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={foropen}
            className={classes.icon}
          >
            {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          
            <Navbar className={classes.widthc} ></Navbar>
         
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className={classes.container}>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawer, {
              [classes.closed]: !isOpened,
              [classes.opened]: isOpened,
            }),
          }}
        >
         <List>
        <ListItem button key="notes" >
          <ListItemIcon color='primary'>
           <NotesIcon color='primary'></NotesIcon>
          </ListItemIcon>
          <ListItemText  primary="Notes" />
        </ListItem>
        <Link to="/todo">
          <ListItem button key="Todolist">

          <ListItemIcon><ListAltIcon color='primary'/></ListItemIcon>
          <ListItemText  primary="Todo List" />
        </ListItem>
        </Link>
        <ListItem button key="reminder">
          <ListItemIcon> <EventIcon color='primary'/></ListItemIcon>
          <ListItemText  primary="Reminders" />
        </ListItem>
        <ListItem button key="Stopwatch">
          <ListItemIcon><TimerIcon color='primary'/></ListItemIcon>
          <ListItemText  primary="StopWatch" />
        </ListItem>
        <ListItem button key="Stats">
          <ListItemIcon><QueryStatsIcon color='primary'/></ListItemIcon>
          <ListItemText   primary="Stats" />
        </ListItem>
      </List>
        </Drawer>
        <main className={classes.main}>
          <DashboardGraph state={props.state} func={props.func}></DashboardGraph>
        </main>
      </div>
      <div className={classes.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}
