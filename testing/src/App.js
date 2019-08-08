import React from 'react';
import Dashboard from './component/Dashboard'
import Display from './component/Display'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baseball Scoreboard</h1>
      </header>
      <Display />
      <Dashboard />

    </div>
  );
}

export default App;
