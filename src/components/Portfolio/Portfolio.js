import React from 'react';

const Portfolio = (props) => {
  console.log(props);
  return (
    <section className="portfolio">
      <div className="portfolio-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">
            web developer portfolio
          </span>
        </h1>
        <h2 className="heading-secondary">
          From Web Components and UI/UX animations to React.JS, Redux,
          Node.JS, and css(sass/scss).
          Check out my latest web software development portfolio projects.
        </h2>
      </div>
    </section>
  );
};

export default Portfolio;
