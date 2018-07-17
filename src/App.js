import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { list } from '../node_modules/postcss';

class App extends Component {
  onClick() {
    alert('omer mindivanli');
  }
  render() {
    const title = 'Hej Hej!';
    const newTitle = 'Such Nice Flowers!';
    const arrList = [1, 2, 3, 'omer js'];
    const obj = { name: 'niyazi', age: 21 };
    return (
      <div className="App">
        <h1>{title}</h1>
        <h2>{true ? newTitle : 'Such Nice Flowers!'}</h2>
        <h3>{newTitle}</h3>
        <h4>
          {arrList.map(item => {
            return item;
          })}
        </h4>
        <h5>{obj.name + obj.age}</h5>
      </div>
    );
  }
}

export default App;
