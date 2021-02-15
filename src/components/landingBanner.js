import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import BackgroundSlider from 'react-background-slider';
import Church from '../images/church.jpg';
import Crowd from '../images/crowd.jpg';
import Jesus from '../images/jesus.jpg';
import BannerContent from './bannerContent';

const useStyles = makeStyles({
    banner: {
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        textAlign: 'center',
        width: '100%',
        height:'100vh',
        
    },
    cardContainer: {
        //centers the card in the middle
        justifyContent: 'center',        
        position:'absolute',
        top:0,left:0,right:0,bottom:0,   
        height:'50%',
        margin: 'auto',
      }
});
   



export default function LandingBanner(){
    const classes = useStyles();
   
    return(
            <div className={classes.banner} > 
                <div className={classes.cardContainer}>
                    <BannerContent />
                </div>
                <BackgroundSlider 
                    images={[Crowd,Jesus,Church]}
                    duration={10}
                    transition={2}
                    
                />
            </div>
    )

}