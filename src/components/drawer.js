import React from "react"
import clsx from 'clsx'
import {makeStyles,Drawer,ListItem, ListItemText,List, ListItemIcon } from "@material-ui/core"
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import TodayIcon from '@material-ui/icons/Today';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const useStyles = makeStyles(() => ({
    postionMenu:{
        position: 'fixed',
        top: '30px',
        left: '30px',
        padding: '20',
        margin: '0',
        zIndex:'10'
    },
    list: {
        width: '100%',
        color: 'white',
    },
    fullList: {
        width: '100%',
    },
    
}));

export default function SideMenu(){
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          style={{background: "linear-gradient(to right, rgba(44,95,45), rgba(0,177,210))", height:'100%'}}
        >
            <List>
                <ListItem button href='#'  component="a" >
                    <ListItemIcon>
                        <HomeIcon color='white'/>
                    </ListItemIcon>
                    <ListItemText primary='Home'  />
                </ListItem>
                <ListItem button href='#sermons' component="a"  >
                    <ListItemIcon>
                        <LibraryMusicIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Sermons' />
                </ListItem>
                <ListItem button href='#announcements' component="a" >
                    <ListItemIcon>
                        <AnnouncementIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Announcements' />
                </ListItem>
                <ListItem button href='#calendar' component="a" >
                    <ListItemIcon>
                        <TodayIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Calendar' />
                </ListItem>
                <ListItem button href='#aboutus' component="a" >
                    <ListItemIcon>
                        <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText primary='About Us' />
                </ListItem>
                
            </List>
        </div>
  );
    return(
        <div className={classes.postionMenu} >
        <Fab onClick={toggleDrawer('left', true)}>
            <MenuIcon/>
        </Fab>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
        </Drawer>
        </div>
    )
};