import React, { Component } from 'react';
import '../App.css';
import processes from '../processes/process.js';
import ProcessTitle from './title.js';
import Timer from './timer.js';
import Step from './step.js';

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

export default Steps;
