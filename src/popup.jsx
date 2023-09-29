import React from "react";
import { useState } from "react";
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
  const [isToggledVideo, setIsToggledVideo] = useState(false);
  const [isToggledAudio, setIsToggledAudio] = useState(false);

  const onToggledVideo = () => {
    setIsToggledVideo(!isToggledVideo);
  };

  const onToggledAudio = () => {
    setIsToggledAudio(!isToggledAudio);
  };

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

        <div className="selectionContainer">
          <div className="mediaContainer">
            <div className="media">
              <img src={videoImage} className="video-icon"></img>
              <span className="video-title">Camera</span>
            </div>

            <div className="radioBtn">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isToggledVideo}
                  onChange={onToggledVideo}
                />
                <span className="slider rounded" />
              </label>
            </div>
          </div>

          <div className="mediaContainer">
            <div className="media">
              <img src={audioImage} className="video-icon"></img>
              <span className="video-title">Audio</span>
            </div>

            <div className="radioBtn">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isToggledAudio}
                  onChange={onToggledAudio}
                />
                <span className="slider rounded" />
              </label>
            </div>
          </div>

          <div className="containerBtn">
            <button type="button"> Start Recording</button>
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
