import React from "react"
import {Grid, Typography, Divider, makeStyles, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {useStaticQuery,graphql} from 'gatsby';

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
    const data = useStaticQuery(graphql`
        query {
            churchLogo: file(relativePath: { eq: "logo.pngg" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
        `)

    return(
            <Grid container spacing={2} style={{background: "linear-gradient(to right, rgba(0,177,210), rgba(44,95,45))"}}>
                <Grid item xs='12' md='12'style={{textAlign: 'center'}} >
                    <Typography variant='h3' style={{color:'white'}}><strong>Never Miss A Thing</strong></Typography>
                    <Typography variant='body1' style={{color:'white'}}>Follow us on social media</Typography>
                </Grid>
                
                <Grid item xs='6' md='2'style={{textAlign: 'center', margin:'0 auto'}} >
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

            </Grid>
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