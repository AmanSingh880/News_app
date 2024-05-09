import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
// import { useState } from 'react';
export default class App extends Component {
  // const [mode,setMode]=useState('light');
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}

