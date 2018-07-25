import React, { Component } from 'react';
import PropTypes from 'prop-types';
import titles from './titles';

class RenderingList extends Component {
  render() {
    const itemList = ['first', 'second', 'third', 'fourth'];
    return (
      <div>
        <strong>{titles.Lesson1}</strong>
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
