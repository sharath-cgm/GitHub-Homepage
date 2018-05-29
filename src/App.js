import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Body1 from './body1';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Header />
      <Body1 />
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
