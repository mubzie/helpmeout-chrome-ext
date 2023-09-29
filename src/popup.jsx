import React from "react";
import { render } from "react-dom";
import { ReactDOM } from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./popup.css";
import logoImage from "/public/vector.png";
import settingImage from "/public/setting.png";
import closeImage from "/public/close.png";
import audioImage from "/public/audio.png";
import videoImage from "/public/video.png";
import copyImage from "/public/copy.png";
import monitorImage from "/public/monitor.png";

function Popup() {
  return (
    <div className="container">
      <div className="header-container">
        <div className="logoContainer">
          <img src={logoImage} className="logoBtn" alt="logo"></img>
          <span className="title">HelpMeOut</span>
        </div>

        <div className="options">
          <div className="settingContainer">
            <img src={settingImage} className="settingBtn" alt="Settings"></img>
          </div>

          <div className="closeContainer">
            <img src={closeImage} className="closeBtn" alt="close"></img>
          </div>
        </div>
      </div>

      <p className="para">
        This extension helps you record and share help videos with ease.
      </p>

      <div className="parentContainer">
        <div className="topContainer">
          <div className="f-screen">
            <img src={monitorImage} className="f-screen-icon"></img>
            <span className="f-screen-title">Full screen</span>
          </div>

          <div className="c-tap">
            <img src={copyImage} className="c-tap-icon"></img>
            <span className="c-tap-title">Current tap</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// create App root and render
const root = document.getElementById("react-target");
const app = (
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
const rootElement = createRoot(root);
rootElement.render(app);
