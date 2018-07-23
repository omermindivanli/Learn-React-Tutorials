import React, { Component } from 'react';

class SetState extends Component {
  state = {
    surname: 'freshman'
  };
  componentWillMount() {
    this.setState({ surname: 12312 });
  }
  render() {
    const componentName = '3. SetState:';
    return (
      <div>
        <strong>{componentName}</strong>
        <br />
        {this.state.surname}
      </div>
    );
  }
}

export default SetState;
