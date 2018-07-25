import React, { Component } from 'react';
import PropTypes from 'prop-types';
import titles from './titles';

class EventHandlers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Omer',
      age: 24
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log('this.input.value');
  }
  onClick() {
    alert('Hej hej');
  }
  render() {
    const componentName = '2. Event Handlers:';
    return (
      <div>
        {this.state.class}
        <strong>{componentName}</strong>
        <p>
          Name:
          {this.state.name}
        </p>
        <p>His Age: {this.state.age}</p>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} placeholder="OnChange Event" />
        </form>
        <button onClick={this.onClick}>OnClick Event!</button>
      </div>
    );
  }
}

EventHandlers.propTypes = {
  componentName: PropTypes.string,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func
};

export default EventHandlers;
