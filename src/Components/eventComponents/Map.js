import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component{
    constructor(props){
        super()
        this.redirect = () =>{
            window.open('https://www.google.com/search?rlz=1C1CHBD_enUS864US864&sxsrf=ACYBGNR6oLi0z6QaQSQqmJ0_8UsZzoKohQ:1581198683762&q=dialexa+dallas&spell=1&sa=X&ved=2ahUKEwjNtPWO-MLnAhVEIKwKHQq1DZsQBSgAegQIDRAn&biw=1920&bih=969', '_blank')
        }
    }
    render(){

        const { lat, lng, google } = this.props
        const latLng = {
            lat: lat,
            lng: lng
        }
        console.log(this.props)
        return(
            <Map
                google = {google}
                zoom = {16}
                style = {{width: '25vw', height: '40vh'}}
                initialCenter={latLng} >
                  <Marker position={latLng} onClick={this.redirect}/>
            </Map>
    
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCG9JNOIFPxWaigSRdnxGSs1UePRtBTunQ'
})(MapContainer)