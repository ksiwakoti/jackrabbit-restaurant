import React, { Component } from 'react';
import './DefualtMenu.css';
import './menuAll.css';


//redux thingy
import {connect} from 'react-redux';

class DefualtMenu extends Component {
  render() {
    return (
      <div className="Defult-Menu-Main-Div">
        <div className="box1">
          <div className="box11" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box11)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box11)}>
              {this.props.MenuBoxes.box11}
            </h3>
          </div>
          <div className="box12" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box12)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box12)}>
              {this.props.MenuBoxes.box12}
            </h3>
          </div>
          <div className="box13" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box13)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box13)}>
              {this.props.MenuBoxes.box13}
            </h3>
          </div>
        </div>
        <div className="box2">
          <div className="box21" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box21)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box21)}>
              {this.props.MenuBoxes.box21}
            </h3>
          </div>
          <div className="box22" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box22)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box22)}>
              {this.props.MenuBoxes.box22}
            </h3>
          </div>
          <div className="box23" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box23)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box23)}>
              {this.props.MenuBoxes.box23}
            </h3>
          </div>
        </div>
        <div className="box3">
          <div className="box31" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box31)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box31)}>
              {this.props.MenuBoxes.box31}
            </h3>
          </div>
          <div className="box32" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box32)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box32)}>
              {this.props.MenuBoxes.box32}
            </h3>
          </div>
          <div className="box33" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box33)}>
            <h3 className="boxh3" onClick={() => this.props.HandleMenuClick(this.props.MenuBoxes.box33)}>
              {this.props.MenuBoxes.box33}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispachToProps = (dispach) => {
  return {
    HandleMenuClick: (buttomName) => {
      switch (buttomName){
        case "HOME":{
          dispach({type: "HANDLE_BODY_CHANGE_HOME"})
          break;
        }
        case "RESERVATION":{
          dispach({type: "HANDLE_BODY_CHANGE_RESERVATION"})
          break;
        }
        case "ABOUT US":{
          dispach({type: "HANDLE_BODY_CHANGE_ABOUT_US"})
          break;
        }
      }
    } 
  }
}

const mapStateToProps = (state) => {
  return {
    MenuBoxes: state.MenuBoxes
  }
}

export default connect(mapStateToProps, mapDispachToProps) (DefualtMenu);
