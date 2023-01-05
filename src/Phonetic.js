import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />

      <p> {props.phonetic.text}</p>
    </div>
  );
}
