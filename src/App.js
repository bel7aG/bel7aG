import React, { Component } from 'react';
import { Router } from './components';
import { ParticlesOption } from './components';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router />
        <Particles
          params={ParticlesOption}
          className="particles"
        />
      </div>
    );
  }
}

export default App;
