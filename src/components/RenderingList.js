import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderingList extends Component {
  render() {
    const itemList = ['first', 'second', 'third', 'fourth'];
    return (
      <div>
        <strong> 1. Rendering A List:</strong>
        {itemList.map(item => {
          return <div>{item}</div>;
        })}
      </div>
    );
  }
}

RenderingList.propTypes = {
  itemList: PropTypes.object
};

export default RenderingList;
