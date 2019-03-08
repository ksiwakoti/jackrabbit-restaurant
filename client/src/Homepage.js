import React, { Component } from 'react';
import HeaderDiv from './components/header/header';
import HomepageBody from './components/homepageCom/homepageCom';
import ReservationCom from './components/reservationCom/reservation.js'
import AboutusCom from './components/aboutusCom/aboutus.js'


//redux thingy
import {connect} from 'react-redux';

class Homepage extends Component {

  render() {
    return (
      <div>
        <HeaderDiv/>

        { this.props.body === "homepage" ?
          <HomepageBody />
        :  (<div> </div>)}

        { this.props.body === "reservation" ?
          <ReservationCom />
        :  (<div> </div>)}

        { this.props.body === "aboutUs" ?
          <AboutusCom />
        :  (<div> </div>)}
        
      </div>
    );
  }
}

const mapDispachToProps = (dispach) => {
  return {
  }
}

const mapStateToProps = (state) => {
  return {
    body:state.body
  }
}

export default connect(mapStateToProps, mapDispachToProps) (Homepage);
