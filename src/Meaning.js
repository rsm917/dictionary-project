import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <p>
                <strong>Definition: </strong>
                {definition.definition}
                <br />

                <Example example={definition.example} />

                <br />
              </p>
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
