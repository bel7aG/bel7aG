import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { Header } from './components';

class App extends Component {

  render() {
    return (
      <div className="container">
        <AppRouter />
      </div>
    );
  }
}

export default App;
