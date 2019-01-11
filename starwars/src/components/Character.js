import React from "react";

const Charactor = props => {
  return (
    <div>
      <h2>{props.characterOnProps.name}</h2>
      <ul>
        <li>{`Gender:${props.characterOnProps.gender}`}</li>
        <li>{`Hair Color:${props.characterOnProps.gender}`}</li>
        <li>{`Skin Color:${props.characterOnProps.gender}`}</li>
        <li>{`Eye Color:${props.characterOnProps.gender}`}</li>
        <li>{`Height:${props.characterOnProps.gender}cm`}</li>
      </ul>
    </div>
  );
};
