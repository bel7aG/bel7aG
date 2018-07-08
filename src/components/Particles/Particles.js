import React from 'react';

const ParticlesOption = {
  particles: {
    number: {
      value: 37,
      density: {
        enable: true,
        value_area: 880
      }
    },
    color: {
      value: "#FFF"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 1,
        color: "#000"
      },
      polygon: {
        nb_sides: 7
      },
    },
    opacity: {
      value: 1,
      random: true,
    },
    size: {
      value: 1.6,
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
      distance: 60,
      color: "#000000",
      opacity: 1,
      width: 0.4810236182596568
    },
    move: {
      enable: true,
      speed: 10.2,
      direction: "none",
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1100,
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
        speed: 3,

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
}

export default ParticlesOption;
