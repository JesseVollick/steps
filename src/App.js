import React, { Component } from 'react';
import './App.css';

function ProcessTitle (props){
  return <h1>{props.title}</h1>
}

var Timer = React.createClass({
  render:function(){
    return(
      <a href="#">Timer</a>
    )
  }
});

var Step = React.createClass({
  render:function(){
    var className = 'step';
    return(
      <div className={className}>
        {this.props.index + 1}
        {this.props.description}
        {this.props.time}
      </div>
    )
  }
});

var Steps = React.createClass({
  render:function(){
  var stepsList = [];
  for(var i =0; i < this.props.numSteps;i ++){
    stepsList.push(
      <Step />
    )
  }

    return(
      <div className='steps'>{stepsList}</div>
    )
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ProcessTitle title='Clever Dripper' />
          <Timer />
          <Steps numSteps={6}></Steps>
        </div>
      </div>
    );
  }
}

export default App;
