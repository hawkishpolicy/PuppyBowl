import React from "react";
import {PuppyCard} from "./"

const PuppyList = (props) => {
  
  const puppies = props.puppies
  
  
  
  return <div id="puppyListDisplay">
  {puppies.map(puppy => {
   return <PuppyCard puppy = {puppy}/>
  })}
</div>
};

export default PuppyList;
