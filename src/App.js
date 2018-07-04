import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { Header } from './components';
import Particles from 'react-particles-js';


class App extends Component {
  render() {
    return (
      <div className="container">
        <AppRouter />
        <Particles
          params={{
            particles: {
              number: {
                value: 37,
                density: {
                  enable: true,
                  value_area: 880
                }
              },
              color: {
                value: "#fff"
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 2,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 3
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1190,
                  opacity_min: 0,
                  sync: true
                }
              },
              size: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 24.107242916656496,
                  size_min: 3.436231636904035,
                  sync: true
                }
              },
              line_linked: {
                enable: true,
                distance: 150.48066982851817,
                color: "#000000",
                opacity: 1,
                width: 0.4810236182596568
              },
              move: {
                enable: true,
                speed: 10.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 100,
                  rotateY: 100
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 255.80432187492372,
                  line_linked: {
                    opacity: 0.5
                  }
                },
                bubble: {
                  distance: 73.08694910712106,
                  size: 12.181158184520177,
                  duration: 10,
                  opacity: 0.6577825419640896,
                  speed: 3
                },
                repulse: {
                  distance: 267.9854800594439,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
          className="particles"
        />
      </div>
    );
  }
}

export default App;
