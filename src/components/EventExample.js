import React, { Component } from 'react';

class EventExample extends Component {
  state = {
    surname: 'freshman',
    title: '3. Event an example:'
  };
  onClick() {
    alert('It was a joke! We love you :)');
  }
  componentDidMount() {
    this.setState({ title: '4. examplessss' });
  }
  onChange(event) {
    event.preventDefault();
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        {this.state.title}
        <br />
        <input onChange={this.onChange} />
        <button onClick={this.onClick}>BOMB!</button>
      </div>
    );
  }
}

export default EventExample;
