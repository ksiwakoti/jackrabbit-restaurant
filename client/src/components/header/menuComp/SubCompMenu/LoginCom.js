import React, { Component } from 'react';
import './LoginCom.css';


//redux thingy
import {connect} from 'react-redux';

class loginCom extends Component {

    state = {
      usernameInput: null,
      passwordInput: null
    }

    handleInputChange = (e) => {
      e.preventDefault()
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
      const {usernameInput} = this.state
      const {passwordInput} = this.state
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
                  <input className="loginInputBox" onChange={this.handleInputChange} type="text" name="usernameInput" />
                </label>
                <label className="labelInput">
                  <br />
                    password
                  <br />
                  <input  className="loginInputBox" onChange={this.handleInputChange} type="password" name="passwordInput" />
                </label>
                <br />
                <a className="SignInFailureMessege">{this.props.SingInfailureMessege}</a>
                <button 
                  type="button"
                  className="loginButton" 
                  onClick={() => this.props.LoginClickHandle(this.state.usernameInput, this.state.passwordInput)}>
                    Login
                </button>
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
    },
    LoginClickHandle: ( usernameInput, passwordInput) =>{
      dispach({type: "SIGNIN_CLICK", usernameInput, passwordInput})
    }
  }
}

const mapStateToProps = (state) => {
  return {
    SingInfailureMessege: state.SingInfailureMessege
  }
}

export default connect(mapStateToProps, mapDispachToProps) (loginCom);
