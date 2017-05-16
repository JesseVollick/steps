import React, { Component } from 'react';
import './App.css';

function ProcessTitle (props){
  return <h1>{props.title}</h1>
}

class Timer extends Component{
  render(){
    return(
      <h2>Timer goes In here</h2>
    )
  }
}

class Step extends Component{
  render(){
    var className = 'step';
    if(this.props.selected){
      className += ' selected'
    }
    return(
      <div className={className}>
        <div>{this.props.index}</div>
        <div>{this.props.description}</div>
        <div>{this.props.time} seconds</div>
      </div>
    )
  }
}


var Steps = React.createClass ({
  
  getInitialState: function() {
    return {
      selectedIndex: 0
    }
  },


  render(){
  var stepsList = [];
  for(var i =0; i< this.props.numSteps; i ++){
    // var isSelected = i === this.state.selectedIndex;
    stepsList.push(
      <Step key={this.props.process[i].key}index={this.props.process[i].index} description={this.props.process[i].description} time={this.props.process[i].time} />
    )
  }

    return(
      <div className='steps'>{stepsList}</div>
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
      },
  ];


    return (
      <div className="App">
        <div>
          <ProcessTitle title='Clever Dripper' />
          <Timer />
          <Steps numSteps={cleverDripper.length} process={cleverDripper}></Steps>

        </div>
      </div>
    );
  }
}

export default App;
