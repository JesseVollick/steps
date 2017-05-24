import React, { Component } from 'react';
import '../App.css';

class Timer extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.onToggleClick}>Toggle</button>
        <button onClick={this.props.startbutton}>Start</button>
        <div className="totalTime">Total Time: {this.props.totalTime}</div>
      </div>
    )
  }
}

export default Timer;
