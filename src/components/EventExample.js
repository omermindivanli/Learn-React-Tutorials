import React, { Component } from 'react';
import PropTypes from 'prop-types';
import titles from './titles';

class EventExample extends Component {
  state = {
    surname: 'freshman',
    title: '4. Event Example:'
  };
  onClick() {
    alert('It was a joke! We love you :)');
  }
  componentDidMount() {
    this.setState({ title: '4. Great Event Example' });
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
