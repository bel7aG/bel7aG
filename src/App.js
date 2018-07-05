import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { ParticlesOption } from './components';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRouter />
        <Particles
          params={ParticlesOption}
          className="particles"
        />
      </div>
    );
  }
}

export default App;
