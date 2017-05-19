import React, { Component } from 'react';
import './App.css';
import CleverDripper from './processes/process.js';

//says 'CLever Dripper'
function ProcessTitle (props){
  return <h1>{props.title}</h1>
}

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

var Steps = React.createClass ({

  getInitialState: function() {
    return {
      selectedIndex: 0,
      totalTime: this.props.totalTime
    }
  },

  onToggleClick: function(evt) {
    if(this.state.selectedIndex < this.props.numSteps){
      this.setState({
        selectedIndex: (this.state.selectedIndex + 1)
      })
    }
  },

  startButtonClick: function(evt) {
    this.interval = setInterval(this.startButtonClick, 1000);
    this.setState({totalTime: this.state.totalTime - 1})
  },

  render(){

    var stepsList = [];
      for(var i = 0; i < this.props.numSteps; i ++){
        var isSelected = i === this.state.selectedIndex;
        stepsList.push(
          <Step
              key={this.props.process[i].key}
              index={this.props.process[i].index}
              description={this.props.process[i].description}
              time={this.props.process[i].time}
              selected={isSelected}
            />
        )
      }

    return(
      <div>
        <ProcessTitle title='Clever Dripper' />
        <Timer
          onToggleClick={this.onToggleClick}
          startbutton={this.startButtonClick}
          totalTime={this.state.totalTime}
         />
        <div className="selectedIndex">Selected Index : {this.state.selectedIndex}</div>
        <div className='steps'>{stepsList}</div>
      </div>
    )
  }
})

class App extends Component {
  render() {

    var cleverDripper = [
      {
        index: 1,
        key: 1,
        description:'20 second bloom with 75 to 100 g water at 205 deg f',
        time: 20
      },
      {
        index: 2,
        key: 2,
        description:'stir 5 times over the next 15 seconds',
        time: 20
      },
      {
        index: 3,
        key: 3,
        description:'complete pour to a total of 365g, stir 5x and cover',
        time: 20
      },
      {
        index: 4,
        key: 4,
        description:'drop at 2:00 aiming for a total brew time of 3:30',
        time: 20
      },
      {
        index: 5,
        key: 5,
        description:'Clean up and savor a delicious brew',
        time: 20
      },
    ];

  var totalTime = 0; //now equals 210
  for (var i = 0; i < cleverDripper.length; i++){
    totalTime += cleverDripper[i].time;
  }

    return (
      <div className="App">
          <Steps
            numSteps={cleverDripper.length}
            process={cleverDripper}
            totalTime={totalTime}
          />
      </div>
    );
  }
}

export default App;
