import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetics(props) {
  if (props.phonetic.audio.length > 1) {
    return (
      <div className="Phonetics">
        <p> {props.phonetic.text}</p>
        <ReactAudioPlayer
          src={props.phonetic.audio}
          className="Audio-player"
          controls
        />
      </div>
    );
  } else {
    return null;
  }
}
