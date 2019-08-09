import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard'
import Display from './/Display/Display'

import './App.css';

class App extends Component {
  state = {
    player:'JimBob',
    balls:0,
    strikes:0,
    fouls:0
  }

  resetHandler = e => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  hitHandler = e =>{
    this.resetHandler(e)
  }

  strikeHandler = e =>{
    if(this.state.strikes < 2){
    this.setState(previousState =>{
    return {strikes:previousState.strikes + 1}
  })
      }
  else{
    this.resetHandler(e)
    }
  }
  foulHandler = e => {
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    }
  };

  ballhandler = e => {
    if (this.state.balls < 3) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else this.resetHandler(e);
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Baseball Scoreboard</h1>
        </header>
        <Display reset={this.resetHandler} BatterUp={this.state} />
        <Dashboard 
          ball={this.ballhandler}
          strike={this.strikeHandler}
          foul={this.foulHandler}
          hit={this.hitHandler}
        />

      </div>
    );
  } 
}

export default App;
