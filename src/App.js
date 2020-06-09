import React from "react";
import logo from "./assets/logo.png";

import Intro from "./components/Intro";
import LeftColumn from "./components/Leftcolumn";
import RightColumn from "./components/Rightcolumn";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/css/all.css";

function App() {
  return (
    <div>
      <Intro />
      <main className="section-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="content">
                <LeftColumn />
                <RightColumn />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
