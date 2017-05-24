import React, { Component } from 'react';
import '../App.css';

class Step extends Component{
  render(){
    var className = 'step';
    if(this.props.selected){
      className += ' selected'
    }

    return(
      <div className={className}>
        <div className="index">{this.props.index}</div>
        <div className="description">{this.props.description}</div>
        <div className="time">{this.props.time} seconds</div>
      </div>
    )
  }
}

export default Step;
