import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for eventClick
import moment from 'moment';

export default class Calendar extends React.Component {
  render() {
    return (
       
            <div style={{width:'90%',height:'100%', margin:'0 auto'}}>
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    eventClick={handleEventClick}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left:   'title',
                        center: 'today',
                        right:  'prev,next'
                    }}
                    height={700}
                    events={[
                        { title: 'Fasting prayer', start: '2021-02-11T12:30:00', end:'2021-02-17T14:30:00' },
                        { title: 'Worship team practice', start: '2021-02-16T12:00:00', end:'2021-02-16T14:30:00'},
                        { title: 'Youth conference', start: '2021-02-16T16:30:00', end:'2021-02-16T22:45:00'},
                        { title: 'Sunday service', startTime: '10:00:00', endTime:'13:30:00', daysOfWeek:[0], color:'red'}
                    ]}
                />
            </div>
       
     
    )
  }
}

function handleEventClick(info){
    var start = "Start time: "+moment(info.event.start.toString()).format("h:mm:ss a");
    var end = "End time: "+moment(info.event.end.toString()).format("h:mm:ss a");
    var name = "Event name: "+info.event.title;
    alert(name+'\n'+start+'\n'+end);
}

