import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faDrum } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import { afroSamples, rapSamples } from "./drumSamples";

// import mic from

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "",
      poweredOn: false,
      rapModeOn: false,
      volume: 50,
    };

    this.handleSliderClick = this.handleSliderClick.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handlePowerButton = this.handlePowerButton.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  playAudio(fp) {
    const audio = new Audio(fp);
    audio.volume = this.state.volume / 100;
    audio.play();
  }

  handleKeyDown(e) {
    e.preventDefault();
    if (!rapSamples.hasOwnProperty(e.key)) return;
    const audioElem = document.getElementById(e.key + "-pad");
    audioElem.focus();
    audioElem.click();
  }

  componentDidMount() {
    // add the keydown event listener to the document when the App component mounts
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleModeChange() {
    this.setState((state) => ({
      rapModeOn: !state.rapModeOn,
      displayValue: "Genre: " + (!state.rapModeOn ? "Rap" : "Afrobeats"),
    }));
  }

  handlePowerButton() {
    this.setState((state) => ({
      poweredOn: !state.poweredOn,
      displayValue: "Power: " + (!state.poweredOn ? "ON" : "OFF"),
      rapModeOn: false,
    }));
  }

  handleSliderClick() {
    this.setState({ displayValue: "Volume: " + this.state.volume });
  }

  handleSliderChange(event) {
    const newVolume = event.target.value;
    this.setState({
      volume: newVolume,
      displayValue: "Volume: " + newVolume,
    });
  }

  render() {
    const powerStyle = this.state.poweredOn
      ? { color: "green" }
      : { color: "red" };
    return (
      <div
        id="app"
        className="d-flex justify-content-center align-items-center vh-100 bg-secondary"
      >
        <div
          id="drum-machine"
          className="container-fluid w-50 border border-dark bg-white"
        >
          <div
            id="top-row"
            className="row border border-dark justify-content-between px-3"
          >
            <PowerButton
              handleClick={this.handlePowerButton}
              styles={powerStyle}
            />
            <Display inputValue={this.state.displayValue} />
            <div id="placeholder" className="col-2"></div>
          </div>
          <div
            id="bottom-row"
            className="row border border-dark bg-light justify-content-between px-3"
          >
            <VolumeSlider
              isEnabled={this.state.poweredOn}
              volume={this.state.volume}
              handleClick={this.handleSliderClick}
              handleChange={this.handleSliderChange}
            />
            <Grid
              isEnabled={this.state.poweredOn}
              rapModeOn={this.state.rapModeOn}
              volume={this.state.volume}
              playAudio={this.playAudio}
            />
            <KitSwitch
              handleClick={this.handleModeChange}
              isEnabled={this.state.poweredOn}
              rapModeOn={this.state.rapModeOn}
              rapIcon={rapIcon}
              afroIcon={afroIcon}
            />
          </div>
        </div>
      </div>
    );
  }
}

const DrumPad = (props) => {
  const padId = props.value.toLowerCase().concat("-pad");
  const samples = props.rapModeOn ? rapSamples : afroSamples;
  const audioElem = <audio src={samples[props.value.toLowerCase()]}></audio>;
  const fp = samples[props.value.toLowerCase()];
  return (
    <button
      disabled={!props.isEnabled}
      id={padId}
      className="drum-pad col border border-secondary btn btn-light"
      onClick={() => props.playAudio(fp)}
    >
      {props.value}
    </button>
  );
};

const Grid = (props) => {
  return (
    <div id="grid" className="col-7 block container-fluid">
      <div className="row h-100 align-items-center">
        <DrumPad
          value="Q"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <DrumPad
          value="W"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <DrumPad
          value="E"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <div className="w-100 h-0"></div>
        <DrumPad
          value="A"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <DrumPad
          value="S"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <DrumPad
          value="D"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <div className="w-100 h-0"></div>
        <DrumPad
          value="Z"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <DrumPad
          value="X"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
        <DrumPad
          value="C"
          isEnabled={props.isEnabled}
          rapModeOn={props.rapModeOn}
          volume={props.volume}
          playAudio={props.playAudio}
        />
      </div>
    </div>
  );
};

const PowerButton = (props) => {
  return (
    <button
      id="power-button"
      className="col-1 block fs-3 btn"
      onClick={props.handleClick}
      style={props.styles}
    >
      <FontAwesomeIcon icon={faPowerOff} />
    </button>
  );
};
const Display = (props) => {
  return (
    <div id="display" className="col-6 block" style={{border: "solid 1px black"}}>
      {props.inputValue}
    </div>
  );
};

const VolumeSlider = (props) => {
  return (
    <div id="volume-slider" className="col-1 block">
      <input
        type="range"
        disabled={!props.isEnabled}
        defaultValue={props.volume}
        onClick={props.handleClick}
        onChange={props.handleChange}
      />
    </div>
  );
};

const KitSwitch = (props) => {
  return (
    <div id="kit-switch" className="col-2 block align-self-end">
      <Switch
        onChange={props.handleClick}
        disabled={!props.isEnabled}
        checked={props.rapModeOn}
        checkedIcon={props.rapIcon}
        uncheckedIcon={props.afroIcon}
        height={30}
        width={65}
      />
    </div>
  );
};

const rapIcon = <img id="rap-icon" src="icons/primary-krec.svg"></img>;
const afroIcon = <img id="afro-icon" src="icons/drum-3-svgrepo-com.svg"></img>;

export default App;
