
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      background: "#fff",
    },
  });
  

export default function AnnouncementCard(props){
    const classes = useStyles();
    

    return(
        <Card className={classes.root} variant='outlined'> 
            <CardContent>
                <Typography variant="h2" >{props.title}</Typography>
                <Typography variant="body1" color="textSecondary">Announcer: {props.announcer}</Typography>
                <Typography variant="body1" color="textSecondary">Target Audience: {props.target}</Typography>
                <Typography variant="body1" color="textSecondary">Date: {props.date}</Typography>
                <Divider variant="middle" />
                <Typography variant="body2" component="p">{props.message}</Typography>
            </CardContent>
        </Card>
           
                
        
    )
}