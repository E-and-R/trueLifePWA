import React, { useEffect, useRef,useState } from "react";
import ReactPlayer from "react-player";
import { graphql, StaticQuery } from 'gatsby';
import {Card, CardContent, CardActionArea, CardMedia, Typography,Avatar, CardActions, Grid, List, ListItem, ListItemAvatar ,ListItemText, Hidden} from '@material-ui/core';


const Player = React.memo(() => {
  const player = useRef(null);
  const [url, setUrl] = useState("https://firebasestorage.googleapis.com/v0/b/truelife-2d329.appspot.com/o/Sermons%2FThe%20Just%20Shall%20Live%20By%20Faith%20BY%20Pastor%20Mnisi%2004-08-19.wav?alt=media&token=f93fefaf-75d1-4674-933b-f521b9a0be86");
  const [image, setImage] = useState("https://firebasestorage.googleapis.com/v0/b/truelife-2d329.appspot.com/o/Profile%20Images%2FpersonalWebsite.jpg?alt=media&token=cba57d1b-f93c-47e8-9059-a86528ddb432");
  const [title,setTitle]= useState("The Just shall live by Faith");
  const [speaker, setSpeaker] = useState("Pastor Mnisi")

  const playASermon = (title, speaker, image, src) =>{
    setUrl(src);
    setTitle(title);
    setSpeaker(speaker);
    setImage(image);  
}

  useEffect(() => {
    console.log(player.current);
    player.current && player.current.seekTo(1, "seconds");
  }, []);

  return (
    <div style={{ background:"linear-gradient(to right, rgba(0,177,210), rgba(44,95,45))"}}>
        <Grid container spacing={2} style={{textAlign: 'center', justifyContent: 'center' ,display:'flex'}}>
            <Grid item md='12'>
                <Hidden smUp><Typography variant='h4'  style={{color:'white', padding:'40px 0'}}><strong>SERMONS</strong></Typography></Hidden>
                <Hidden xsDown><Typography variant='h1' style={{ color:'white'}}><strong>SERMONS</strong></Typography></Hidden>
            </Grid>
            <Grid item md='5' xs='11' style={{marginBottom:'20px'}}>
                <Card >
                    <CardActionArea>    
                        <CardMedia
                            component="img"
                            height='100%'
                            image={image}
                            title={title}/>
                        <CardContent>
                            <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" >{title}</Typography>
                            <Typography style={{textAlign: 'center'}} variant="body2" color="textSecondary">{speaker}</Typography>  
                        </CardContent>
                        <CardActions>
                            <ReactPlayer
                                ref={player}
                                url={url}
                                controls
                                width={"100%"}
                                height={"50px"}
                                playing
                            />
                        </CardActions>
                    </CardActionArea>
                </Card>
                
            </Grid>
            
            <Grid item md='4' xs='11' style={{marginBottom:'20px'}} >
                <StaticQuery
                    query={graphql`
                    {
                        allSermon {
                        edges {
                            node {
                            image
                            speaker
                            src
                            time
                            title
                            }
                        }
                        }
                    }
                    `}
                    render={data =>
                        
                        <div>
                        <Typography variant='h4' style={{color:'white'}}><strong>PLAYLIST</strong></Typography>
                        <List >
                            {data.allSermon.edges.map(({node, index})=>(
                                <ListItem key={node.title} alignItems="flex-start" button onClick={()=>playASermon(node.title, node.speaker, node.image, node.src)}>
                                    <ListItemAvatar>
                                    <Avatar
                                        alt={node.title}
                                        src={node.image}
                                        variant='square'
                                        style={{width: '50px', height:'50px'}}
                                    />
                                    </ListItemAvatar>
                                    <ListItemText
                                        style={{color:'white'}}
                                        primary={node.title}
                                        secondary={node.speaker+' • '+node.time}
                                    />
                                    
                                </ListItem>
                            ))}
                        
                        </List>
                        </div>
                        }
                >
                </StaticQuery>
            </Grid>
        </Grid>
    </div>
  );
});

export default Player;
