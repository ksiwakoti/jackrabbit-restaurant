import React, { Component } from 'react';
import './header.css';

//redux thingy
import {connect} from 'react-redux';

class HeaderBottom extends Component {
  
  render(){
    return(
      <div>
        <button 
          className="ButtomTitle"
          onClick={() => this.props.HandleClicks(this.props.name)}>
          {this.props.name}
        </button>
      </div>
    );
  }
}


const mapDispachToProps = (dispach) => {
  return {
    HandleClicks: (ClickType) => {
      if(ClickType == 'SIGN IN'){
        dispach({type:'SING_IN'})
      }
      else if(ClickType == 'SIGN UP'){
        dispach({type:'SING_UP'})
      }
      else{
        dispach({type:'NOTHING'})
      }
    }
  }
}
  
const mapStateToProps = (state) => {
  return {
  
  }
}
  
export default connect(mapStateToProps, mapDispachToProps) (HeaderBottom);
  