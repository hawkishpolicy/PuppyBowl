import React from "react";
import {Link} from "react-router-dom"

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
        <li>Breed: {props.puppy.breed}</li>
        <li>Status: {props.puppy.status}</li>
        <li>Team ID: {props.puppy.teamId}</li>
        <li>Cohort ID: {props.puppy.cohortId}</li>
      </ul>
      <Link to={"/"}>
      <button>Return</button>
      </Link>
    </div>
  );
};

export default PuppyCard;
