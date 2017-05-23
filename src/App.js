import React, { Component } from 'react';
import './App.css';
import processes from './processes/process.js';

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

class Steps extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      selectedIndex: -1,
      totalTime: props.totalTime,
      timePerStep: 0
    };
    this.onToggleClick = this.onToggleClick.bind(this);
    this.switchSelected = this.switchSelected.bind(this);
    this.tickDown = this.tickDown.bind(this);
    this.tickUp = this.tickUp.bind(this);
    this.startButtonClick = this.startButtonClick.bind(this);
  }

  onToggleClick(evt) {
    if(this.state.selectedIndex < this.props.numSteps){
      this.setState({
        selectedIndex: (this.state.selectedIndex + 1)
      })
    }
  }

  switchSelected(evt){
      if(this.state.timePerStep === this.props.process[this.state.selectedIndex].time){
        this.setState({selectedIndex: this.state.selectedIndex + 1});
        this.setState({timePerStep: 0});
      }
      if(this.state.totalTime === 0){
        this.reset();
      }
  }

  reset(timeLeft){
    clearInterval(this.countDown);
    clearInterval(this.countUp);
    this.setState({
      totalTime: this.props.totalTime,
      selectedIndex: -1
    });
  }

  tickDown(ext){
    this.setState({totalTime: this.state.totalTime -1})
  }

  tickUp(ext){
    this.setState({timePerStep: this.state.timePerStep + 1})
    this.switchSelected();
  }

  startButtonClick(evt) {
    this.interval = setInterval(this.tickDown, 1000);
    this.interval = setInterval(this.tickUp, 1000);
    this.setState({selectedIndex: this.state.selectedIndex + 1});
  }

  render(){

      //var stepsList = [];
      // for(var i = 0; i < this.props.numSteps; i ++){
      //   var isSelected = i === this.state.selectedIndex;
      //   stepsList.push(
      //     <Step
      //         key={this.props.process[i].key}
      //         index={this.props.process[i].index}
      //         description={this.props.process[i].description}
      //         time={this.props.process[i].time}
      //         selected={isSelected}
      //       />
      //   )
      // } TODO: map

      return(
        <div>
          <ProcessTitle title='Clever Dripper' />
          <Timer
            onToggleClick={this.onToggleClick}
            startbutton={this.startButtonClick}
            totalTime={this.state.totalTime}
           />
          <div className="selectedIndex">Selected Index : {this.state.selectedIndex}</div>
          <div>timer going up: {this.state.timePerStep}</div>
          <div className='steps'>
            {this.props.process.map((step, i) => (
              <Step
                key={step.key}
                index={step.index}
                description={step.description}
                time={step.time}
                selected={i === this.state.selectedIndex}
              />
            ))}
          </div>
        </div>
      )

    // return(
    //   <div>
    //     <ProcessTitle title='Clever Dripper' />
    //     <Timer
    //       onToggleClick={this.onToggleClick}
    //       startbutton={this.startButtonClick}
    //       totalTime={this.state.totalTime}
    //      />
    //     <div className="selectedIndex">Selected Index : {this.state.selectedIndex}</div>
    //     <div>timer going up: {this.state.timePerStep}</div>
    //     <div className='steps'>{stepsList}</div>
    //   </div>
    // )
  }
}


class StepsFromExternalData extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      selectedIndex: -1,
      totalTime: props.totalTime,
      timePerStep: 0
    };
    // this.onToggleClick = this.onToggleClick.bind(this);
    // this.switchSelected = this.switchSelected.bind(this);
    // this.tickDown = this.tickDown.bind(this);
    // this.tickUp = this.tickUp.bind(this);
    // this.startButtonClick = this.startButtonClick.bind(this);
  }
  render(){
    return(
      <div>
          <div>StepsFromExternalData Component goes Here</div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.totalTime} Seconds</h2>
            <div className='steps'>
              {this.props.processSteps.map((step, i) => (
                <Step
                  key={step.key}
                  description={step.description}
                  time={step.time}
                  selected={i === this.state.selectedIndex}
                />
              ))}
            </div>
      </div>

    )
  }
}


class App extends Component {

  constructor (props) {
    super (props);


    this.cleverDripper = [
      {
        index: 1,
        key: 1,
        description:'20 second bloom with 75 to 100 g water at 205 deg f',
        time: 5
      },
      {
        index: 2,
        key: 2,
        description:'stir 5 times over the next 15 seconds',
        time: 4
      },
      {
        index: 3,
        key: 3,
        description:'complete pour to a total of 365g, stir 5x and cover',
        time: 10
      },
      {
        index: 4,
        key: 4,
        description:'drop at 2:00 aiming for a total brew time of 3:30',
        time: 14
      },
      {
        index: 5,
        key: 5,
        description:'Clean up and savor a delicious brew',
        time: 0
      },
    ];
  }

  render() {

    console.log(processes.CleverDripper);

  var totalTime = 0; //now equals 210
  for (var i = 0; i < this.cleverDripper.length; i++){
    totalTime += this.cleverDripper[i].time;
  }
  var totalTimeFrench = 0; //now equals 210
  for (var i = 0; i < processes.FrenchPress.steps.length; i++){
    totalTimeFrench += processes.FrenchPress.steps[i].time;
    console.log(processes.FrenchPress.steps[i].time);
  }

    return (
      <div className="App">
          <Steps
            numSteps={this.cleverDripper.length}
            process={this.cleverDripper}
            totalTime={totalTime}
          />
        <StepsFromExternalData
            name={processes.FrenchPress.name}
            numSteps={processes.FrenchPress.steps.length}
            processSteps={processes.FrenchPress.steps}
            totalTime={totalTimeFrench}
          />
      </div>
    );
  }
}

export default App;
