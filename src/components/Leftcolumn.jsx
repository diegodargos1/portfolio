import React from "react";
function LeftColumn() {
  return (
    <div className="content__left">
      <section className="resume">
        <div className="resume__intro">
          <h2 className="heading-secondary u-color-white u-margin-bottom-med">
            About me
          </h2>
          <p className="paragraph u-color-white">
            5+ years of backend experience developing in PHP, NodeJs, MySql, and
            MongoDB. 3 years working on frontend with HTML5, CSS3, Javascript,
            jQuery, Bootstrap 3, SASS/SCSS, ReactJs. Currently studing React
            Native.
          </p>
          <p className="paragraph u-color-white u-margin-bottom-smaller">
            Success comes with commitment and hardwork. Always giving my best.
          </p>
        </div>
        <div className="resume__experience">
          <h2 className="heading-secondary u-margin-bottom-small">
            The process
          </h2>
          <p className="paragraph">
            Most of the projects, I was responsible for implementing the backend
            and frontend with PHP, MySql, HTML5, CSS, and JS. This process
            involved:
          </p>
          <ul className="list">
            <li className="list__item paragraph">
              Analyzing the needs of the customer to build a solid structure for
              their system.
            </li>
            <li className="list__item paragraph">
              Developing/Testing the database and the backend.
            </li>
            <li className="list__item paragraph">
              Developing the frontend based on what the customer required.
            </li>
            <li className="list__item paragraph">
              Testing code in multiple browsers to ensure cross-browser
              compatibility.
            </li>
            <li className="list__item paragraph">
              Using jQuery and leveraging popular plugins for common or complex
              interactive components.
            </li>
            <li className="list__item paragraph">
              Constantly maintaining communication with order
              supervisors/clients.
            </li>
          </ul>
        </div>
        <div className="resume__education">
          <h2 className="heading-secondary u-color-white">Qualifications</h2>
          <ul className="list">
            <li className="list__item">
              <p className="paragraph u-color-white">
                <span className="u-weight-bld">Computer Science</span>
                <br />
                Universidade São Caetano do Sul
                <br />
                <span className="paragraph--small">
                  (Feb. 2010 - Nov. 2014)
                </span>
                <br />
                <br />
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default LeftColumn;
