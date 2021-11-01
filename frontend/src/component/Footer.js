import React from "react";
import './Footer.css';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
const useStyles = makeStyles((theme) => ({
    navbar: {
        position: 'relative',
        display:'flex',
        justifyContent:'space-around',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },


}));

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar className={classes.navbar}>
                    <a href="/" className="logo">
                        Productivity App
                    </a>
                <div className="navlinks">
                    <div className="link">
                        &copy; 2021 Opencode
                    </div>
                    <div className="socLinks">
                      <Facebook className={classes.link} />
                      <Twitter className={classes.link} />
                      <Instagram className={classes.link} />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
// <AppBar position="static">
//     <Toolbar className={classes.footer}>
//         <Typography className={classes.logo}>
//             <Link to="/" style={{ fontSize: "35px", textDecoration: "none", color: "orange" }}>
//                 Productivity App
//             </Link>
//         </Typography>
        // <div className={classes.navLinks}>
        //     <Typography variant="body1" color="inherit" className={classes.link}>
        //         &copy; 2019 Gistia
        //     </Typography>
        //     <Facebook className={classes.link} />
        //     <Instagram className={classes.link} />
        //     <Twitter className={classes.link} />
        // </div>
//     </Toolbar>
// </AppBar>
