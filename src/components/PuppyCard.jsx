import React from "react";

const PuppyCard = (props) => {
  return (
    <div id="puppyCardDisplay">
      <h2>{props.puppy.name}</h2>
      <img
        id={"puppyProfilePic"}
        src={props.puppy.imageUrl}
        alt={"pic of selected puppy"}
      ></img>
      <ul>
        <li>{props.puppy.breed}</li>
        <li>{props.puppy.status}</li>
      </ul>
    </div>
  );
};

export default PuppyCard;
