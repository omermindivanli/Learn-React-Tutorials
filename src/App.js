import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Routers from './Routers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Routers title="Rendering A List" />
      </div>
    );
  }
}

export default App;
