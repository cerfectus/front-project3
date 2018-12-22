import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


const mapStyles = {
  width: '100%',
  height: '100%'
};
export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}style={mapStyles} initialCenter={{lat: 19.398054, lng: -99.171665}}>
        <Marker   onClick={this.onMarkerClick} name={"Current location"} />
        
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div />
        </InfoWindow>
        <Marker
          name={"Viveros"}
          position={{ lat: 19.351403, lng: -99.171449 }}
        />
        <Marker />
        <Marker
          name={"Parque de los Venados"}
          position={{ lat: 19.373137, lng: -99.155747}}
        />
        <Marker />
        <Marker
          name={"Alberca Olimpica"}
          position={{ lat: 19.358460, lng: -99.154696}}
        />
        <Marker />
        <Marker
          name={"Parque San Lorenzo"}
          position={{ lat: 19.376244, lng: -99.176315}}
        />
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDt0SLdf6TYG8eNb0F50yfI1u9hqFX29sw"
})(MapContainer);
