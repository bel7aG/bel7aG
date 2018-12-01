import React from 'react';
import { MyPicture } from '../'

const About = () => (
  <section className="about">
    <div className="wrapper">
      <div className="letter-box">
        <div className="lettering">
          <h1 className="heading-primary">
            <span className="heading-primary-main">
              What's up, my name is Belhassen Gharsallah.
            </span>
            <span className="heading-primary-sub">
              Complicated huh? You can call me
              <span className="heading-primary-sub__tag"> bel7a<span className="heading-primary-sub__tag-big-g">G</span>
              </span>
              <span className="heading-primary-sub__symbol"> ` <span>~</span>`</span>
            </span>
          </h1>
          <p>
            Full Stack Web Developer and UI/UX Javascript specialist.
          </p>
          <address>Based in Tunisia, TN. Enquires at <span>Belhassengharsallah@gmail.com</span></address>
        </div>
      </div>
    </div>
  </section>
);

export default About;
