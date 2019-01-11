import React from "react";

const Character = props => {
  return (
    <div>
      <h2>{props.characterOnProps.name}</h2>
      <ul className="property-list">
        <li>{`Gender: ${props.characterOnProps.gender}`}</li>
        <li>{`Hair Color: ${props.characterOnProps.hair_color}`}</li>
        <li>{`Skin Color: ${props.characterOnProps.skin_color}`}</li>
        <li>{`Eye Color: ${props.characterOnProps.eye_color}`}</li>
        <li>{`Height: ${props.characterOnProps.height}cm`}</li>
      </ul>
    </div>
  );
};

export default Character;
