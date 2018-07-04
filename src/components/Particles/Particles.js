import React from 'react';
import Particles from 'react-particles-js'

const particleOpt = {
  particles: {
    number: 100,
    density: {
      enable: true,
      value_area: 600
    }
  }
};

const Particle = () => (
  <React.Fragment>
    <Particles params={particleOpt} />
  </React.Fragment>
);


export default Particle; 
