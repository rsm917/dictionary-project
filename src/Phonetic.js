import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <p> {props.phonetic.text}</p>
    </div>
  );
}
