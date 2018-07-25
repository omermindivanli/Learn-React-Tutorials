import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SetState extends Component {
  state = {
    surname: 'Mindivanli'
  };
  componentWillMount() {
    this.setState({ surname: 'Mindivanlisson' });
  }
  render() {
    const title = '3. What is SetState?';
    return (
      <div>
        <strong>{title}</strong>
        <br />
        {this.state.surname}
      </div>
    );
  }
}

SetState.propTypes = {
  surname: PropTypes.string
};

export default SetState;
