import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Routers from './Routers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Routers
          titleLesson1="Rendering A List"
          titleLesson2="Event Handlers"
          titleLesson3="What is setState?"
          titleLesson4="Example An Event Handler"
          titleLesson5="LifeCycle"
        />
      </div>
    );
  }
}

export default App;
