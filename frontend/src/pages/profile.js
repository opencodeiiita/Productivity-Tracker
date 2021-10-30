import React, { useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Button from "../component/Profile/CustomButtons/Button.js";
import GridContainer from "../component/Profile/Grid/GridContainer.js";
import GridItem from "../component/Profile/Grid/GridItem.js";
import NavPills from "../component/Profile/NavPills/NavPills.js";
import Parallax from "../component/Profile/Parallax/Parallax.js";
import profile from "../images/christian.jpg";
import studio1 from "../images/graph2.png";
import studio2 from "../images/graph3.png";
import work1 from "../images/graph2.png";
import work2 from "../images/graph3.png";
import { container, title } from "../component/material-kit-react";
const imagesStyles = {
    imgFluid: {
        maxWidth: "100%",
        height: "auto",
    },
    imgRounded: {
        borderRadius: "6px !important",
    },
    imgRoundedCircle: {
        borderRadius: "50% !important",
    },
    imgRaised: {
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    imgGallery: {
        width: "100%",
        marginBottom: "2.142rem",
    },
    imgCardTop: {
        width: "100%",
        borderTopLeftRadius: "calc(.25rem - 1px)",
        borderTopRightRadius: "calc(.25rem - 1px)",
    },
    imgCardBottom: {
        width: "100%",
        borderBottomLeftRadius: "calc(.25rem - 1px)",
        borderBottomRightRadius: "calc(.25rem - 1px)",
    },
    imgCard: {
        width: "100%",
        borderRadius: "calc(.25rem - 1px)",
    },
    imgCardOverlay: {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        padding: "1.25rem",
    },
};
const profilePageStyle = {
    container,
    profile: {
        textAlign: "center",
        "& img": {
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)",
        },
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important",
    },
    name: {
        marginTop: "-80px",
    },
    ...imagesStyles,
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },

    navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center",
    },
    profileContainer: {
        zindex: "-1",
        postion: "relative"
    }
};

const useStyles = makeStyles(profilePageStyle);

export default function Profile(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const [profileData, setprofileData] = useState({})
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    useEffect(() => {
         axios.get('/profile').then((res)=>{
             setprofileData(res);
         }
         )
    }, [])
    return (
        <>
           <Navbar />
        <div >
            <Parallax
                small
                filter
                image={require("../images/profile-bg.jpg").default}
                className={classes.parralax}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={profileData.photoURL} alt="..." className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{profileData.name}</h3>
                                        <h6>DESIGNER</h6>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-twitter"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-instagram"} />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <i className={"fab fa-facebook"} />
                                        </Button>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                An artist of considerable range, Chet Faker — the name taken by
                                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                                and records all of his own music, giving it a warm, intimate
                                feel with a solid groove structure.{" "}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Account Stats Type I",
                                            tabIcon: Camera,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={8}>
                                                        <img
                                                            alt="..."
                                                            src={work1}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={8}>
                                                        <img
                                                            alt="..."
                                                            src={work1}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            ),
                                        },
                                        {
                                            tabButton: "Account Stats Type II",
                                            tabIcon: Palette,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={8}>
                                                        <img
                                                            alt="..."
                                                            src={studio1}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={studio2}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            ),
                                        },
                                        {
                                            tabButton: "Account Stats Type III",
                                            tabIcon: Favorite,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <img
                                                            alt="..."
                                                            src={work1}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={12}>
                                                        <img
                                                            alt="..."
                                                            src={work2}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            ),
                                        },
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
