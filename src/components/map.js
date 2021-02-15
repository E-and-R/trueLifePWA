import React,{Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Typography, Grid } from '@material-ui/core'

const location={
    lat: -24.597444,
    lng: 27.395907,
}

export class MapComponent extends Component{
    showInMapClicked = () => {
        window.open("https://maps.google.com?q="+location.lat+","+location.lng );
      };
    
    render(){
        return(
            <div style={{height:420,}}>
                <Grid container style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Grid item xs='12' md='12'> 
                        <Map
                            style={{ height: 400, width: '90%' ,margin:'0 auto', overflowX:'hidden', overflowY:'hidden'}}
                            containerStyle={{maxWidth:500, height:400}}
                            google ={this.props.google}
                            resetBoundsOnResize={true}
                            zoom={16}
                            initialCenter={{
                                lat: location.lat,
                                lng: location.lng,
                            }}>
                            <Marker key="marker_1" 
                                name={'We are here'}
                                position={{
                                    lat: location.lat,
                                    lng: location.lng,
                                }} 
                                onClick={this.showInMapClicked}
                            />
                        </Map>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default GoogleApiWrapper({

    apiKey: (process.env.GATSBY_GOOGLE_API_KEY)

})(MapComponent);