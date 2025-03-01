// App.jsx (converted to a functional component)
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import { afroSamples, rapSamples } from "./drumSamples";

const App = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [poweredOn, setPoweredOn] = useState(false);
  const [rapModeOn, setRapModeOn] = useState(false);
  const [volume, setVolume] = useState(50);

  const playAudio = (fp) => {
    const audio = new Audio(fp);
    audio.volume = volume / 100;
    audio.play();
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (!rapSamples.hasOwnProperty(e.key)) return;
    const audioElem = document.getElementById(e.key + "-pad");
    if (audioElem) {
      audioElem.focus();
      audioElem.click();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [volume]);

  const handleModeChange = () => {
    setRapModeOn(!rapModeOn);
    setDisplayValue("Genre: " + (!rapModeOn ? "Rap" : "Afrobeats"));
  };

  const handlePowerButton = () => {
    setPoweredOn(!poweredOn);
    setDisplayValue("Power: " + (!poweredOn ? "ON" : "OFF"));
    setRapModeOn(false);
  };

  const handleSliderClick = () => setDisplayValue("Volume: " + volume);
  const handleSliderChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    setDisplayValue("Volume: " + newVolume);
  };

  const powerStyle = poweredOn ? { color: "green" } : { color: "red" };

  return (
    <div id="app" className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div id="drum-machine" className="container-fluid w-50 border d-flex flex-column bg-white py-2 px-0">
        <div id="top-row" className="row justify-content-between p-1">
          <PowerButton handleClick={handlePowerButton} styles={powerStyle} />
          <Display inputValue={displayValue} />
          <div id="placeholder" className="col-2"></div>
        </div>
        <div id="bottom-row" className="row justify-content-between p-1">
          <VolumeSlider
            isEnabled={poweredOn}
            volume={volume}
            handleClick={handleSliderClick}
            handleChange={handleSliderChange}
          />
          <Grid isEnabled={poweredOn} rapModeOn={rapModeOn} volume={volume} playAudio={playAudio} />
          <KitSwitch handleClick={handleModeChange} isEnabled={poweredOn} rapModeOn={rapModeOn} />
        </div>
      </div>
    </div>
  );
};

const DrumPad = ({ value, isEnabled, rapModeOn, playAudio }) => {
  const padId = value.toLowerCase() + "-pad";
  const samples = rapModeOn ? rapSamples : afroSamples;
  const fp = samples[value.toLowerCase()];

  // Optional: manage a simple animation class on click
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    playAudio(fp);
    setTimeout(() => setActive(false), 100);
  };

  return (
    <button
      disabled={!isEnabled}
      id={padId}
      className={`drum-pad col border border-secondary btn btn-light ${active ? "animate" : ""}`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

const Grid = ({ isEnabled, rapModeOn, playAudio }) => (
  <div id="grid" className="col-7 block container-fluid">
    <div className="row justify-content-center mb-2">
      {["Q", "W", "E"].map((key) => (
        <DrumPad key={key} value={key} isEnabled={isEnabled} rapModeOn={rapModeOn} playAudio={playAudio} />
      ))}
    </div>
    <div className="row justify-content-center mb-2">
      {["A", "S", "D"].map((key) => (
        <DrumPad key={key} value={key} isEnabled={isEnabled} rapModeOn={rapModeOn} playAudio={playAudio} />
      ))}
    </div>
    <div className="row justify-content-center mb-2">
      {["Z", "X", "C"].map((key) => (
        <DrumPad key={key} value={key} isEnabled={isEnabled} rapModeOn={rapModeOn} playAudio={playAudio} />
      ))}
    </div>
  </div>
);

const PowerButton = ({ handleClick, styles }) => (
  <button id="power-button" className="col-2 block fs-3 btn" onClick={handleClick} style={styles}>
    <FontAwesomeIcon icon={faPowerOff} />
  </button>
);

const Display = ({ inputValue }) => (
  <div id="display" className="col-7 block" style={{ border: "solid 1px" }}>
    {inputValue}
  </div>
);

const VolumeSlider = ({ isEnabled, volume, handleClick, handleChange }) => (
  <div id="volume-slider" className="col-2 block">
    <input
      type="range"
      disabled={!isEnabled}
      value={volume}
      onClick={handleClick}
      onChange={handleChange}
    />
  </div>
);

const KitSwitch = ({ handleClick, isEnabled, rapModeOn }) => (
  <div id="kit-switch" className="col-2 block align-self-end">
    <Switch
      onChange={handleClick}
      disabled={!isEnabled}
      checked={rapModeOn}
      checkedIcon={<img id="rap-icon" src="icons/primary-krec.svg" alt="Rap" />}
      uncheckedIcon={<img id="afro-icon" src="icons/drum-3-svgrepo-com.svg" alt="Afro" />}
      height={30}
      width={65}
    />
  </div>
);

export default App;
