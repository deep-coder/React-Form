import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Form App</h2>
        </div>
        <FormComponent/>
      </div>
    );
  }
}

export default App;
