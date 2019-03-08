import React, { Component } from 'react';
import serverImg from './img/serverjpg.jpeg';
import './homepageCom.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 44.311520, lng: -96.774680 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 44.311520, lng: -96.774680 }} />}
  </GoogleMap>
))


class BodyBottom extends Component {
  render(){
    return(
      <div className="BodyBottom">
        <h1 className="BodyBottomTitle">{this.props.name}</h1>
      </div>
    );
  }
}

class HomepageBody extends Component {
    render(){
      return(
        <div className="bodyDiv">
          <div className="BodyDiv1">
            <div className="leftBodyDiv">
              <h2 className="bodyDivTitle1"> WELCOME! </h2>
              <a className="bodyDivPra1">
                Dear guests,<br />
                you are welcome to dine with
                us at Jackrabbit Restaurant.<br />
                We will serve you with the mouth watering dishes.<br />
                Have a pleasant dining experience.
              </a>
            </div>
            <div className="rightBodydiv">
              <img className="serverImg" src={serverImg} alt="logo" />
            </div>
          </div>
          <div className="BodyDiv1">
            <div className="leftBodyDiv">
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcLV3XY35fHYBDoYGfd3UEcOFx1N38cjI&v=3.exp&libraries=geometry,drawing,places"
                query={{ key: 'AIzaSyC2LgMkPLAjHF2YjAEoWN1MocEb4OhL0dM', libraries: 'geometry,drawing,places' }}
                loadingElement={<div className="locationMap"/>}
                containerElement={<div className="locationMap"/>}
                mapElement={<div className="locationMap"/>}
              />
            </div>
            <div className="rightBodydiv">
              <h1 className="bodyDivTitle1"> VISIT US, NOW!</h1>
              <a className="bodyDivPra1">
                Jackrabbit Restaurant<br />
                1816 6th Street<br />
                Brookings, SD<br />
                57006
              </a>
            </div>
          </div>
          <div className="BodyDiv1">
            <div className="fullBodyDiv">
              <h1 className="bodyDivTitle1">
                ONLINE ORDERS AND RESERVATION
              </h1>
              <BodyBottom name="Order" />
              <BodyBottom name="Make a Reservation" />
              <BodyBottom name="Menu" />
            </div>
          </div>
        </div>
      );
    }
}

export default HomepageBody;
