import React, { Component } from 'react';

class RenderingList extends Component {
  render() {
    const itemList = ['first', 'second', 'third', 'fourth'];
    return (
      <div>
        <strong> 1. Rendering a list:</strong>
        {itemList.map(item => {
          return <div>{item}</div>;
        })}
      </div>
    );
  }
}

export default RenderingList;
