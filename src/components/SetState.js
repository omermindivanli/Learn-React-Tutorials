import React, { Component } from 'react';
import PropTypes from 'prop-types';
import titles from './titles';

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: 'Mindivanli'
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ surname: 'Mindivanlisson' });
    if (this.state.surname === 'Mindivanlisson') {
      this.setState({ surname: 'Mindivanli' });
    }
  }
  render() {
    const title = '3. What is SetState?';
    return (
      <div>
        <strong>{title}</strong>
        <br />
        {this.state.surname}
        <br />
        <button onClick={this.onClick}>Click Me!</button>
        <p>
          What I did is that adding a this.state obj and creating an
          onClick event to control state by means of bind() function
        </p>
      </div>
    );
  }
}

SetState.propTypes = {
  surname: PropTypes.string
};

export default SetState;
