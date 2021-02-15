import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from "gatsby"
import BannerContent from './bannerContent';
import BackgroundSlider from 'gatsby-image-background-slider';

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
                    query={useStaticQuery(graphql`
                        query {
                        backgrounds: allFile (filter: {sourceInstanceName: {eq: "images"}}){
                            nodes {
                            relativePath
                            childImageSharp {
                                fluid (maxWidth: 4000){
                                ...GatsbyImageSharpFluid
                                }
                            }
                            }
                        }
                        }
                    `)}
                    initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
                    transition={4} // transition duration between images
                    duration={8} // how long an image is shown
                    // specify images to include (and their order) according to `relativePath`
                    images={["church.webp", "crowd.webp", "jesus.webp"]} 
                    /> 
                   
            </div>
    )

}