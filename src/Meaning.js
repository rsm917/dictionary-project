import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example">
                <Example example={definition.example} />
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
