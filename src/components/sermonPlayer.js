import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ReactPlayer from 'react-player'
//import { compose } from "recompose";
import { graphql, StaticQuery } from 'gatsby';
import {Card, CardContent, CardActionArea, CardMedia, Typography,Avatar,  Hidden, Grid, List, ListItem, ListItemAvatar ,ListItemText, IconButton} from '@material-ui/core';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import Duration from './duration';



class SermonPlayer extends Component {
  state = {
    url: 'https://firebasestorage.googleapis.com/v0/b/truelife-2d329.appspot.com/o/Sermons%2FThe%20Just%20Shall%20Live%20By%20Faith%20BY%20Pastor%20Mnisi%2004-08-19.wav?alt=media&token=f93fefaf-75d1-4674-933b-f521b9a0be86', 
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    image: 'https://firebasestorage.googleapis.com/v0/b/truelife-2d329.appspot.com/o/Profile%20Images%2FpersonalWebsite.jpg?alt=media&token=cba57d1b-f93c-47e8-9059-a86528ddb432',
    title: 'The Just Shall Live By Faith',
    speaker: 'Pastor Mnisi'

  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }


  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = (e) => {  
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handleEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }

  handleDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  playASermon = (title, speaker, image, src) =>{
    this.setState({ url: src })
    this.setState({ title: title })
    this.setState({ speaker: speaker })
    this.setState({ image: image })
  }


  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = player => {
    this.player = player
  }

  
  render () {
    var { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip, image, title, speaker } = this.state
    var SEPARATOR = ' · ' 

    return (
      <div style={{background:"linear-gradient(to right, rgba(0,177,210), rgba(44,95,45))"}}>
        <Grid id='sermons' container spacing={2} style={{textAlign: 'center', justifyContent: 'center' ,display:'flex'}}>
              <ReactPlayer
                ref={this.ref}
                className='react-player'
                width='100%'
                height='100%'
                url={url}
                pip={pip}
                playing={playing}
                controls={controls}
                light={light}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={this.handlePlay}
                onEnablePIP={this.handleEnablePIP}
                onDisablePIP={this.handleDisablePIP}
                onPause={this.handlePause}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={this.handleEnded}
                onError={e => console.log('onError', e)}
                onProgress={this.handleProgress}
                onDuration={this.handleDuration}
              />
            <Grid item md='12'>
                <Hidden smUp><Typography variant='h4'  style={{color:'white', padding:'40px 0'}}><strong>SERMONS</strong></Typography></Hidden>
                <Hidden xsDown><Typography variant='h1' style={{ color:'white'}}><strong>SERMONS</strong></Typography></Hidden>
            </Grid>
            <Grid item md='6' xs='12'>
              <Card >
                  <CardActionArea>    
                      <CardMedia
                          component="img"
                          //height="20%"
                          image={image}
                          title={title}/>
                      <CardContent>
                          <Typography style={{textAlign: 'center'}} gutterBottom variant="h5" >{title}</Typography>
                          <Typography style={{textAlign: 'center'}} variant="body2" color="textSecondary">{speaker}</Typography>  
                          <Grid container justify='center' alignContent='center' >
                              <Grid item style={{textAlign: 'center', justifyContent: 'center', width:'5%' ,display:'flex'}}>
                                  <VolumeDown />
                                  </Grid>
                              <Grid item style={{textAlign: 'center', justifyContent: 'center', width:'90%', display:'flex'}}>
                                  <input style={{width:'90%'}}  type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} aria-labelledby="continuous-slider" />
                              </Grid>
                              <Grid item style={{textAlign: 'center', justifyContent: 'center',width:'5%' , display:'flex'}}>
                                  <VolumeUp />
                              </Grid>
                          </Grid>
                          <Grid container justify='center' alignContent='center'>
                              <Grid item style={{textAlign: 'center', justifyContent: 'center',width:'5%' , display:'flex'}}>
                                  <Duration seconds={duration * played} />    
                                </Grid>
                              <Grid item style={{textAlign: 'center', justifyContent: 'center', width:'90%', display:'flex'}}>
                                  <input 
                                      type='range'
                                      min={0} 
                                      max={0.999999} 
                                      step='any' 
                                      value={played} 
                                      onMouseDown={this.handleSeekMouseDown}
                                      onChange={this.handleSeekChange}
                                      onMouseUp={this.handleSeekMouseUp}
                                      style={{width:'90%'}}/>
                              </Grid>
                              <Grid item style={{textAlign: 'center', justifyContent: 'center',width:'5%' , display:'flex'}}>
                                  <Duration seconds={duration} />
                              </Grid>
                          </Grid>
                          <Grid container justify='center' alignContent='center'>
                              <Grid item>
                                  <IconButton onClick={this.handleToggleLoop}>
                                      <RepeatIcon/>
                                  </IconButton>
                              </Grid>
                              <Grid item>
                                  <IconButton onClick={this.handlePlayPause}>
                                      {playing ? <PauseIcon/> : <PlayArrowIcon/>} 
                                  </IconButton>
                              </Grid>
                              <Grid item>
                                  <IconButton onClick={this.handleStop}>
                                      <StopIcon/>
                                  </IconButton>
                              </Grid>
                          </Grid>
                      </CardContent>
                    </CardActionArea>
              </Card>
            </Grid>
            <Grid item md='4' xs='12' >
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
                                  <ListItem key={node.title} alignItems="flex-start" button onClick={()=>this.playASermon(node.title, node.speaker, node.image, node.src)}>
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
                    
    )
  }
}

export default  hot(module)(SermonPlayer)

