import React from 'react';
import { Router } from '..';
import Particles from 'react-particles-js';
import { ParticlesOption } from '..';

const pages = [
  { title: `About`, url: `/` },
  { title: `Portfolio`, url: `/portfolio` },
  { title: `Contact`, url: `/contact` }
]

const App = () => (
  <div className="container">
    <Router pages={pages}/>
    <Particles
      params={ParticlesOption}
      className="particles"
    />
  </div>
)

export default App
