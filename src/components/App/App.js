import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Router } from '..';
import { ParticlesOption } from '..';

export default class App extends Component {
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
