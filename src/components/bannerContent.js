import { Grid, Typography,Hidden } from '@material-ui/core';
import React from 'react'

export default function Card(){
    
    return(
        
        <div  >
            <Grid container spacing={2} >
                <Grid item xs='12' md='12' style={{textAlign:'center'}}>
                    <Hidden xsDown>
                        <Typography variant='h1' style={{color:'white', textAlign:'center'}}><strong>THABIZIMBI</strong></Typography>
                        <Typography variant='h1' style={{color:'white'}}>For</Typography>
                        <Typography variant='h1' style={{color:'white'}}><strong>CHRIST</strong></Typography>
                    </Hidden>
                    <Hidden smUp><Typography variant='h4'  style={{color:'white'}}><strong>DISCIPLING THE PEOPLE OF THABIZIMBI BACK TO CHRIST</strong></Typography></Hidden>
                </Grid>

            </Grid>
            
        </div>

    )    
}