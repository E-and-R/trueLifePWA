import React from "react"
import {Grid, Typography, Hidden, makeStyles, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import Map from './map';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    flexList:{
        //display: 'flex',
        //flexDirection: 'row',
        //padding: 0,
        //width:'100%'

        
    }
  });
  

export default function Footer(){
    const classes = useStyles();

    return(
        <div style={{background: "linear-gradient(to right, rgba(0,177,210), rgba(44,95,45))"}}>
            <Grid container spacing={2} >
                <Grid item xs='12' md='12'style={{textAlign: 'center'}} >
                    
                    <Hidden smUp><Typography variant='h4'  style={{color:'white', padding:'40px 0'}}><strong>Never Miss A Thing</strong></Typography></Hidden>
                    <Hidden xsDown><Typography variant='h1' style={{ color:'white'}}><strong>Never Miss A Thing</strong></Typography></Hidden>
                </Grid>
                
                <Grid item xs='7' md='2'style={{textAlign: 'center', margin:'0 auto'}} >
                    <Typography variant='body1' style={{color:'white'}}>Follow us on social media</Typography>
                    <List className={classes.flexList}>
                        <ListItem Button component="a" href="https://www.facebook.com/Einstein-and-Robin-102521721846393" target="_blank">
                            <ListItemIcon>
                                <FacebookIcon />
                                </ListItemIcon>
                            <ListItemText primary="Facebook" style={{color:'black'}}/>
                        </ListItem>
                        <ListItem Button component="a" href="https://www.facebook.com/Einstein-and-Robin-102521721846393" target="_blank">
                            <ListItemIcon>
                                <YouTubeIcon />
                                </ListItemIcon>
                            <ListItemText primary="Youtube" style={{color:'black'}}/>
                        </ListItem>
                        <ListItem Button component="a" href="https://www.facebook.com/Einstein-and-Robin-102521721846393" target="_blank">
                            <ListItemIcon>
                                <WhatsAppIcon />
                                </ListItemIcon>
                            <ListItemText primary="Whatsapp" style={{color:'black'}}/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs='9' md='2'style={{textAlign: 'center', margin:'0 auto'}} >
                    <Typography variant='body1' style={{color:'white'}}>Get In Touch</Typography>
                    <List className={classes.flexList}>
                        <ListItem >
                            <ListItemIcon>
                                <PhoneIcon/>
                                </ListItemIcon>
                            <ListItemText primary="+27 00000000000" style={{color:'black'}}/>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <PhoneIcon/>
                                </ListItemIcon>
                            <ListItemText primary="+27 00000000001" style={{color:'black'}}/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs='12' md='5' style={{textAlign: 'center', margin:'0 auto'}}>
                    <Typography variant='body1' style={{color:'white'}}>Come Worship With Us</Typography>
                    <Map/>
                </Grid>
            </Grid>
        </div>
    )
}


/**
 * 
 * <Grid item xs='12'>
                    <Grid item xs='12' md='3'>
                        <Img fluid={data.churchLogo.childImageSharp.fluid} />
                    </Grid>
                    <Grid item xs='12' md='9'>

                    </Grid>
                </Grid>
 */