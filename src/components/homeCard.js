import React from "react"
import {Button, Grid, Hidden,makeStyles, Typography } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles(() => ({
    masthead:{
        width: '100%',
        height: '350px',
        //maxHeight: 300,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        
    },
    blackOverlaytext:{
        //display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
        height: '100%',
        width:'100%',
        alignItems: 'center',
        color: 'white',
      
        //bottom:'-20px'
    },
}));


export default function HomeCard(props){
    const classes = useStyles();
    
    return (
        <Grid container >
            
                <Grid item xs='12' md='12' >
                    <BackgroundImage fluid={props.image} className={classes.masthead} >
                            <Grid container  className={classes.blackOverlaytext}>
                                

                                
                                
                                <Grid item style={{  margin:'0 20px'}}>
                                    <Hidden xsDown>
                                        <Typography variant='h2'><strong>{props.title}</strong></Typography>
                                        <Typography variant='body1'>{props.subTitle}</Typography>
                                       
                                    </Hidden>   
                                    <Hidden smUp>
                                        <Typography variant='h4'><strong>{props.title}</strong></Typography>
                                        <Typography variant='body1'>{props.subTitle}</Typography>
                                        
                                    </Hidden>
                                    <Button variant='contained' href={props.href}>{props.buttonName}</Button>
                                </Grid>
                            </Grid>
                    </BackgroundImage>
                </Grid>
            
        </Grid>
    )
}

/**
 * <Hidden smUp>
                <Grid item xs={12}>
                    <BackgroundImage fluid={data.seriousImage.childImageSharp.fluid} className={classes.masthead}>
                        <div>
                            <Typography variant='h3' style={{position:'absolute',left:'50%',bottom:0,transform:'translate(-50%,0%)',msTransform:'translate(-50%,0%)',textAlign:'center',color:'white'}}>Hey I"m<br/>Junior Moraba</Typography>
                            
                        </div>
                    </BackgroundImage>
                </Grid>
            </Hidden>
 */