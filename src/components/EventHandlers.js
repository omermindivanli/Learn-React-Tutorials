import React, { Component } from 'react';

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
  onMouseOver() {
    let reply = prompt('Tjena!');
    console.log(reply);
  }

  render() {
    const componentName = '2. Event Handlers:';
    return (
      <div>
        {this.state.class}
        <strong>{componentName}</strong>
        <p>
          Name: <br />
          {this.state.name}
        </p>
        <p>His Age: {this.state.age}</p>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} />
        </form>
        <button onClick={this.onClick}>Button</button>
        <button onMouseOver={this.onMouseOver}>On Mouse Button</button>
      </div>
    );
  }
}

export default EventHandlers;
