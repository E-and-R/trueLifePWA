import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import AnnouncementCard from './annoucementCard';
import {  Hidden,Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      margin: 5,
      
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        background: "linear-gradient(to right, rgba(44,95,45), rgba(0,177,210))",
    },
    text:{
      background: 'linear-gradient(to top, rgba(255,255,255), rgba(0,0,0))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  }));

export default function Announcements(){
    const classes = useStyles();
    const data = useStaticQuery(graphql`
    {
      allAnnoucement {
        edges {
          node {
            date
            details
            maker
            target
            title
          }
        }
      }
    }
  `)

    return(
      <div id='announcements' style={{background: "linear-gradient(to right, rgba(44,95,45), rgba(0,177,210))"}}>
        <Hidden smUp><Typography variant='h4'  style={{textAlign:'center',color:'white', padding:'40px 0'}}><strong>ANNOUNCEMENTS</strong></Typography></Hidden>
        <Hidden xsDown><Typography variant='h1'   style={{textAlign:'center', color:'white'}}><strong>ANNOUNCEMENTS</strong></Typography></Hidden>
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={0} cellHeight={'auto'} >
                {data.allAnnoucement.edges.map(({node, index})=>(
                    <GridListTile key={node.title}>
                         <AnnouncementCard  title={node.title} date={node.date} message={node.details} announcer={node.maker} target={node.target}/>
                    </GridListTile>
                ))}
            </GridList>
           
        </div>
      </div>
        
    )
}
