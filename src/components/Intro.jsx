import React from "react";
import logo from "../assets/logo.png";
import zull from "../assets/zull.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/main.css";
import "../css/css/all.css";

function Intro() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 hero__wrapper">
            <div className="col-xs-12 col-sm-8 col-md-6 hero__content">
              <div className="hero__copy">
                <div className="hero__logo">
                  <img src={logo} alt="Logo" className="hero__logo-img" />
                </div>
                <div className="divider"></div>
                <h1 className="heading-primary u-margin-bottom-smaller">Hi,</h1>
                <p className="paragraph paragraph--med u-color-white">
                  My name is Diego Dargos. I'm a Brazillian Web Developer living
                  in Vancouver, Canada.
                </p>
                <div className="hero__links">
                  <ul className="hero__social">
                    <li className="hero__social-item">
                      <a
                        href="mailto:diegodargos@gmail.com"
                        target="_blank"
                        className="hero__social-link"
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </li>
                    <li className="hero__social-item">
                      <a
                        href="https://www.linkedin.com/in/diego-dargos-angelo-castro-85aa7911a/"
                        target="_blank"
                        className="hero__social-link"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li className="hero__social-item">
                      <a
                        href="https://github.com/diegodargos1"
                        target="_blank"
                        className="hero__social-link"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                  <a
                    href="https://www.fiverr.com/diegodargos"
                    target="_blank"
                    className="cta cta--white cta--white-outline paragraph paragraph--med u-weight-reg hero__cta"
                  >
                    Hire me on Fiverr
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="hidden-xs col-xs-12 col-sm-4 col-md-6 hero__profile">
              <img
                src="images/profile.png"
                alt="Profile image"
                className="hero__profile-img"
              />
              <div className="hero__profile-message">
                <div className="hero__profile-message__bubble">
                  <p className="paragraph u-color-primary">Let's talk!</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
