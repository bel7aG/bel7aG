import React from 'react'
import { SubApps } from '../'

const Portfolio = (props) => (
  <section className="portfolio">
    <div className="wrapper">
      <div className="portfolio-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">
            web developer portfolio
          </span>
        </h1>
        <h2 className="heading-secondary">
          <span className="heading-secondary-main">
            From Web Components and UI/UX animations to React.JS, Redux,
            Node.JS, and css(sass/scss).
          </span>
          <span className="heading-secondary-sub">
            Check out my latest web software development portfolio projects.
          </span>
        </h2>
      </div>
      <SubApps />
    </div>
  </section>
)

export default Portfolio
