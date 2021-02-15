import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Link,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "gatsby";
import Drawer from './drawer';

const headersData = [
  {
    label: "SERMONS",
    href: "/sermonsPage",
  },
  {
    label: "ANNOUNCEMENTS",
    href: "/announcementsPage",
  },
  {
    label: "CALENDAR",
    href: "/calendarPage",
  },
  {
    label: "ABOUT US",
    href: "/aboutPage",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    //backgroundColor: "#fff",
    background: "linear-gradient(to right, rgba(0,177,210), rgba(44,95,45))",
    paddingRight: "50px",
    paddingLeft: "50px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#fff",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    color: "#fff",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  Link:{
    textDecoration: "none",
  },
}));

export default function Header() {
    const { header, logo, menuButton, toolbar } = useStyles();

    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });

    const { mobileView } = state;

    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };

      setResponsiveness();

      window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          {EandRLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };

    const displayMobile = () => { 
      return (
        <Drawer/>
      );
    };
    
   
    const EandRLogo = (
      <Link style={{ textDecoration: 'none' }} href='/'><Typography variant="h4" className={logo}>True Life Christian Ministries</Typography></Link>
      
    );
    

    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        );
      });
    };

    return(
      <header>
        <AppBar className={header}>
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header> 
    );
  }


