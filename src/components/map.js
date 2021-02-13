import React,{Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Typography, Grid } from '@material-ui/core'

export class MapComponent extends Component{

    render(){
        return(
            <div style={{height:500}}>
                <Grid container style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Grid item xs='12' md='12'>
                        <Typography variant='h4'><strong>Come Visit Us</strong></Typography>
                        <Typography variant='body2' color="textSecondary">Opposite Ysterberg Primary school</Typography>
                    
                        <Map
                            style={{ height: 400, width: '90%' , margin:'0 auto'}}
                            google ={this.props.google}
                            resetBoundsOnResize={true}
                            zoom={16}
                            center={{
                                lat: -24.597444,
                                lng: 27.395907
                            }}>
                            <Marker key="marker_1" 
                                name={'We are here'}
                                position={{
                                    lat: -24.597444,
                                    lng: 27.395907
                                }} 
                            />
                        </Map>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default GoogleApiWrapper({

    apiKey: ('AIzaSyCpA4MOhnytpT9rviAOvVwQ-WG7SxEIjuQ')

})(MapComponent);