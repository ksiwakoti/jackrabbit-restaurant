import React, { Component } from 'react';
import './LoginCom.css';


//redux thingy
import {connect} from 'react-redux';

class loginCom extends Component {

    render() {
      return (
        <div>
          <div className="Defult-Menu-login-Div">
            <div className="headerBox">
              <div className="headerTitleBox">
                <h3 className="h3header">LOGIN</h3>
              </div>
              <div className="headerCancelBox" onClick={this.props.CencelLogin}>
                <h3 className="h3header">X</h3>
              </div>
            </div>
            <div className="mainBox">
              <form className="formSignin">
                <label className="labelInput">
                  username
                  <br />
                  <input className="loginInputBox" type="text" name="username" />
                </label>
                <label className="labelInput">
                  <br />
                    password
                  <br />
                  <input  className="loginInputBox" type="text" name="username" />
                </label>
                <br />
                <button className="loginButton">Login</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
}

const mapDispachToProps = (dispach) => {
  return {
    CencelLogin: () =>{
      dispach({type: "CANCEL_SIGNIN_FORM"})
    }
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispachToProps) (loginCom);
