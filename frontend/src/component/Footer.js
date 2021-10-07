import React from "react";
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
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'red',
    },
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
        alignItems: "center",
        justifyItems: "flex-start"
    },
    
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "22.5px",
        marginLeft: theme.spacing(7),
        cursor: "pointer"
    },
}));

function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar className={classes.navbar}>
                <Typography className={classes.logo}>
                    <Link to="/" style={{ fontSize: "35px", textDecoration: "none", color: "orange" }}>
                        Productivity App
                    </Link>
                </Typography>
                <div className={classes.navlinks}>
                    <div className={classes.link}>
                        &copy; 2021 Opencode
                    </div>
                    <Facebook className={classes.link} />
                    <Twitter className={classes.link} />
                    <Instagram className={classes.link} />
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
