import React, { Component } from 'react';
import PropTypes from 'prop-types';
import titles from './titles';

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <strong>{titles.Lesson5}</strong>
        <br />
        {this.state.surname}
        <br />
        <p>
          What I did is that adding a this.state obj and creating an
          onClick event to control state by means of bind() function
        </p>
      </div>
    );
  }
}

LifeCycleMethods.propTypes = {
  title: PropTypes.string
};

export default LifeCycleMethods;
