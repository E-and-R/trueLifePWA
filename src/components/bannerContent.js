import { Grid, Typography,Hidden } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    banner: {
        
        
        
        alignItems: 'center',
        top:'50%',
        right:'50%',
        width: '100%',
        height: 'auto',
        background: '#000'
        
        
    }
});

export default function Card(){
    const classes = useStyles();
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