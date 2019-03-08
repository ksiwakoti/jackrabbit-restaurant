import React, { Component } from 'react';
import Menu from './menuComp/menu'
import logo from './img/icon.png';
import './header.css';
import HeaderBottom from './headerBottom.js';


class HeaderDiv extends Component {

    render(){
      return (
          <div className="headDiv">
            <div className="leftDiv">
            </div>
            <div className="IconDiv">
              <img className="iconImg" src={logo} alt="logo" />
              <h1 className="resturentTitle">
                Jackrabbit <br /> Restaurant
              </h1>
            </div>
            <div className="rightDiv">
              <div className="UserRegisterDiv">
                <div className="buttomRegisterDiv">
                  <div className="singinDiv">
                    <HeaderBottom name="SIGN IN" />
                  </div>
                  <div className="singupDiv">
                    <HeaderBottom name="SIGN UP"/>
                  </div>
                </div>
              </div>
              <div className="RightDivBottom">
                <Menu />
              </div>
            </div>
          </div>
      );
    }
}

export default (HeaderDiv);
