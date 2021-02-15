import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for eventClick
import moment from 'moment';
import { Hidden, Typography, Grid} from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

export default function Calendar()  {
    const events =[];
    const data = useStaticQuery(graphql`
    {
        allEvent {
            edges {
                node {
                color
                end
                start
                title
                }
            }
        }
        allWeeklyEvent {
            edges {
                node {
                color
                endTime
                daysOfWeek
                startTime
                title
                }
            }
        }
    }
  `);
    data.allEvent.edges.map(({node, index})=>(
        //console.log(node);
        events.push(node)

    ));
    data.allWeeklyEvent.edges.map(({node, index})=>(
        //console.log(node);
        events.push(node)

    ));
    return (
            <div id='calendar' style={{background: "linear-gradient(to right, rgba(0,177,210), rgba(44,95,45))"}}> 
                <Grid container spacing={2} style={{textAlign: 'center', justifyContent: 'center' ,display:'flex'}}>
                    <Grid item xs='11' md='11' style={{marginBottom:'20px'}}>
                    
                        <Hidden smUp><Typography variant='h4'  style={{textAlign:'center',color:'white', padding:'40px 0'}}><strong>CALENDAR</strong></Typography></Hidden>
                        <Hidden xsDown><Typography variant='h1' style={{textAlign:'center', color:'white'}}><strong>CALENDAR</strong></Typography></Hidden>
                        <FullCalendar 
                            style={{}}
                            plugins={[ dayGridPlugin, interactionPlugin ]}
                            eventClick={handleEventClick}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                left:   'title',
                                center: 'today',
                                right:  'prev,next'
                            }}
                            height={700}
                           
                            events={events}
                        />
                        
                        
                   
                    </Grid>
                </Grid>
            </div>
     
    )
  }


function handleEventClick(info){
    
    var start = "Start time: "+moment(info.event.start.toString()).format("h:mm:ss a");
    var end = "End time: "+moment(info.event.end.toString()).format("h:mm:ss a");
    var name = "Event name: "+info.event.title;
    alert(name+'\n'+start+'\n'+end);

}


/**
 * events={[
                                { title: 'Fasting prayer', start: '2021-02-11T12:30:00', end:'2021-02-17T14:30:00' },
                                { title: 'Worship team practice', start: '2021-02-16T12:00:00', end:'2021-02-16T14:30:00',color:'white'},
                                { title: 'Youth conference', start: '2021-02-16T16:30:00', end:'2021-02-16T22:45:00', color:'white'},
                                { title: 'Sunday service', startTime: '10:00:00', endTime:'13:30:00', daysOfWeek:[0], color:'red'}
                            ]}
 */