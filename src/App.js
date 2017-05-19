import React, { Component } from 'react';
import './App.css';

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
        <button onClick={this.props.startbutton}>start</button>
        <div className="totalTime">Total Time: {this.props.totalTime}</div>
      </div>
    )
  }
}




var Steps = React.createClass ({
  getInitialState: function() {
    return {
      selectedIndex: -1,
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

  calculateSelectedTimes: function(){
    console.log(this.props.process);
    let processTimesArr = [];
    for(var i=0; i < this.props.process.length; i++ ){
      processTimesArr.push(this.props.process[i].time);
      console.log(processTimesArr);
    }
  },

  switchSelected: function(evt){
      if(this.state.totalTime % 5 === 0 ){
        this.setState({selectedIndex: this.state.selectedIndex + 1})
      }
  },

  tick: function(ext){
    this.setState({totalTime: this.state.totalTime -1})
    this.switchSelected();
  },

  startButtonClick: function(evt) {
    this.interval = setInterval(this.tick, 1000);
    this.calculateSelectedTimes();

  },


  render(){

    var stepsList = [];
      for(var i =0; i< this.props.numSteps; i ++){
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

  constructor (props) {
    super (props);

    this.cleverDripper = [
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
        time: 15
      },
      {
        index: 3,
        key: 3,
        description:'complete pour to a total of 365g, stir 5x and cover',
        time: 85
      },
      {
        index: 4,
        key: 4,
        description:'drop at 2:00 aiming for a total brew time of 3:30',
        time: 90
      },
      {
        index: 5,
        key: 5,
        description:'Clean up and savor a delicious brew',
        time: 0
      }
    ];
  }

  render() {

    var cleverDripper = [

  ];

  var totalTime = 0; //now equals 210
  for (var i = 0; i < this.cleverDripper.length; i++){
    totalTime += this.cleverDripper[i].time;
  }

    return (
      <div className="App">
          <Steps
            numSteps={this.cleverDripper.length}
            process={this.cleverDripper}
            totalTime={totalTime}
          />
      </div>
    );
  }
}

export default App;
