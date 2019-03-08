import React, { Component } from 'react';
import DefualtMenu from './SubCompMenu/DefualtMenu';
import LoginCom from './SubCompMenu/LoginCom';
import SingupCom from './SubCompMenu/SingupCom';

//redux thingy
import {connect} from 'react-redux';

class Menu extends Component {
  render() {
    return (
      <div>
        { this.props.showMenu === "singIn" ? <LoginCom /> : (<div> </div>)}
        { this.props.showMenu === "singUp" ? <SingupCom/> : (<div> </div>)}
        { this.props.showMenu === "default" ? <DefualtMenu/> : (<div> </div>)}
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
    showMenu: state.showMenu
  }
}


export default connect(mapStateToProps, mapDispachToProps) (Menu);
