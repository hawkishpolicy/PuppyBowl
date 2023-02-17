import React from "react";

const PuppyCard = (props) => {
  return (
    <div id="puppyCardDisplay">
      <div id="puppyNameAndId">
        <h2>{props.puppy.name}</h2>
        <h3>#{props.puppy.id}</h3>
        </div>
      <img
        id={"puppyProfilePic"}
        src={props.puppy.imageUrl}
        alt={"pic of selected puppy"}
      ></img>
      <ul>
        <li>{props.puppy.breed}</li>
        {/* <li>{props.puppy.status}</li> */}
      </ul>
        <button>See Details</button>
    </div>
  );
};

export default PuppyCard;
