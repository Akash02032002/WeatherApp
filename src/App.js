import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Akash02032002/WeatherApp.git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/akashverse0/">
          Akash Kumar
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://github.com/Akash02032002/Portfolio-LandingPage.git/">
          Full Stack Developer
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
