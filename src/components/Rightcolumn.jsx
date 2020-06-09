import React from "react";
import Portfolio from "./Portfolio";
import data from "../data.json";
function RightColumn() {
  return (
    <div className="content__right">
      <section className="portfolio">
        <header className="portfolio__header">
          <h3 className="heading-tertiary u-color-white">Latest projects</h3>
        </header>
        <div className="portfolio__content">
          <div className="portfolio__content-main">
            {data.map((e) => (
              <Portfolio data={e} />
            ))}
          </div>
        </div>
        <footer className="portfolio__footer">
          {/* <button className="cta cta--white paragraph paragraph--med u-color-white u-align-block-center portfolio__show-more">
            Show more
          </button> */}
        </footer>
      </section>
    </div>
  );
}
export default RightColumn;
