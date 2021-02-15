import React from "react"
import {Grid,GridList,GridListTileBar,GridListTile ,Hidden, Typography, makeStyles,List, ListItem, ListItemText,} from '@material-ui/core';
import AboutUsData from './aboutusData';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      background: "linear-gradient(to right, rgba(44,95,45), rgba(0,177,210))"
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

export default function AboutUs(){
    const classes = useStyles();
    return(
        <div style={{maxWidth:'100%', overflowX:'hidden'}}>
            <Grid container spacing={2} id='aboutus' style={{textAlign: 'center', justifyContent: 'center' ,display:'flex',background: "linear-gradient(to right, rgba(44,95,45), rgba(0,177,210))"}}>
                <Grid item xs='12'>
                    <Hidden smUp><Typography variant='h4'  style={{color:'white', padding:'40px 0'}}><strong>ABOUT US</strong></Typography></Hidden>
                    <Hidden xsDown><Typography variant='h1' style={{ color:'white'}}><strong>ABOUT US</strong></Typography></Hidden>
                </Grid>
                <Grid  item xs='12' md='12' style={{textAlign: 'center', justifyContent: 'center',display:'flex'}}>
                    <Grid item xs='12' md='6' style={{textAlign: 'center', justifyContent: 'center'}}>
                        <Typography variant='h4'style={{ color:'white'}} >True Life Christian Ministries</Typography>
                        <Typography variant='body2' color="textSecondary">EST 2001</Typography>
                        <Typography variant='body1' style={{marginLeft:'10px', marginRight:'10px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs='12' md='3' style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Typography variant='h4'style={{ color:'white'}} ><strong>Vision</strong></Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                Making people of thabazimbi and neighbouring areas become born again christians.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Developing christians to achieve true chirstianity status.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Improving social life of poor people.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Improving family relationships.
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs='12' md='3' style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Typography variant='h4' style={{ color:'white'}} ><strong>Mission</strong></Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                Preach the gospel with Thabazimbi being the point of departure and spreading it to the neighbouring areas.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Liase with community structures and make contributions to the welfare of the community.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Interact with churchres and ministries sharing same vision or closely related to our vision.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Giving attention to teaching, coaching and training.
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs='12' md='3' style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Typography variant='h4' style={{ color:'white'}} ><strong>Strategy</strong></Typography>
                    
                    <List>
                        <ListItem>
                            <ListItemText>
                                EXALTATION - Corporate and private worhsip of Christ our king.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                EVANGELISM - Bring the people to meet our king.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                EDIFICATION - Building up the relationship we have with our king.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                EQUIPING - Preparing God's people for works of service for our king.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                EXTENSION - Reaching into society with the king of compassion and justice of our king.
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                    
                <Grid item xs='12'>
                    <Typography variant='h4'style={{ color:'white'}} ><strong>Meet Our Team</strong></Typography>
                    <div className={classes.root}>
                        <GridList className={classes.gridList} cols={0}  >
                            {AboutUsData.map((tile) => (
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title} 
                                style={{width:'300px', height:'200px'}}/>
                                <GridListTileBar
                                    title={tile.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    />
                            </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )
}