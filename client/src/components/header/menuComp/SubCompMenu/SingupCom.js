import React, { Component } from 'react';
import './SingupCom.css'

//redux thingy
import {connect} from 'react-redux';

class SingipCom extends Component {
  render() {
    return (
      <div>
        <div className="Defult-Menu-login-Div">
          <div className="headerBox">
            <div className="headerTitleBox">
              <h3 className="headertitle" > SING UP </h3>
            </div>
            <div className="headerCancelBox" onClick={this.props.CencelSignUp}>
              <h3 className="headertitle" > X </h3>
            </div>
          </div>
          <div className="mainBox">
            <form>
              //sing up info
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispachToProps = (dispach) => {
  return {
    CencelSignUp: () =>{
      dispach({type: "CANCEL_SIGNUP_FORM"})
    }
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispachToProps) (SingipCom);
