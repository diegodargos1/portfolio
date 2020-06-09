import React, { useState } from "react";
import zull from "../assets/zull.JPG";
function Portfolio(props) {
  const [btnClass, setBtnClass] = useState(false);
  const [display, setDisplay] = useState(false);
  const images = require.context("../assets", true);
  let img = images("./" + props.data.img);

  function handleMore(e) {
    e.preventDefault();
    setBtnClass(!btnClass ? "portfolio__item-cta__icon--is-open" : false);
    setDisplay(!btnClass ? "showContent" : "hiddenContent");
  }

  function handleLink() {
    window.open(props.data.link);
  }

  return (
    <article className="portfolio__item">
      <div className="portfolio__item-preview">
        <div
          className="portfolio__item-preview"
          style={{
            backgroundImage: `url(${img})`,
          }}
          onClick={handleLink}
        ></div>
        <ul className="portfolio__item-cta">
          <li className="portfolio__item-cta__item">
            <a
              href={props.data.github}
              target="_blank"
              className="portfolio__item-cta__link"
            >
              <i className="fab fa-github portfolio__item-cta__icon"></i>
            </a>
          </li>
          <li className="portfolio__item-cta__item portfolio__item-cta__item--no-link">
            <a
              href="#"
              className="portfolio__item-cta__link portfolio__item-cta__link--info"
              onClick={handleMore}
            >
              <i
                className={"fa fa-plus portfolio__item-cta__icon " + btnClass}
              ></i>
            </a>
          </li>
          <li className="portfolio__item-cta__item">
            <a
              href="#"
              className="portfolio__item-cta__link portfolio__item-cta__link--live"
              onClick={handleLink}
            >
              <span className="portfolio__item-cta__label">See live</span>
              <i className="fa fa-long-arrow-alt-right portfolio__item-cta__icon"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className={"portfolio__item-info " + display}>
        <div className="portfolio__item-info__intro">
          <p className="paragraph u-color-white">{props.data.description}</p>
        </div>
        <div className="portfolio__item-info__content">
          {props.data.duties.map((e) => {
            return (
              <p className="paragraph" key={e}>
                {e.text}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Portfolio;
