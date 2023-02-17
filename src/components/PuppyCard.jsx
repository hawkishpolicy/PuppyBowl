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
            <li>{props.puppy.breed}</li>
        </ul>
        <Link to={props.puppy.name}>
            <button>See Details</button>
        </Link>
    </div>
        
  );
};

export default PuppyCard;
