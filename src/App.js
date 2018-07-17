import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Omer Mindivanli',
      age: 24
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log('this.input.value');
  }
  render() {
    return (
      <div className="App">
        <h2>
          Full Name: <br />
          {this.state.title}
        </h2>
        <h3>His Age: {this.state.age}</h3>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} />
        </form>
      </div>
    );
  }
}

export default App;
