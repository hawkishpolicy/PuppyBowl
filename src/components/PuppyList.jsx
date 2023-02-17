import React from "react";
import { PuppyCard } from "./";

const PuppyList = (props) => {
  const puppies = props.puppies;
  const searchString = props.searchString;

  return (
    <div id="puppyListDisplay">
      {!searchString
        ? puppies.map((puppy) => {
            return <PuppyCard key={puppy.id} puppy={puppy} />;
          })
        : puppies.map((puppy) => {
            if (puppy.name.toLowerCase() === searchString.toLowerCase()) {
              return (
                <div id="puppyListDisplay2">
                 <PuppyCard key={"searchMap"+puppy.id} puppy={puppy} />;
                 </div>)
              } else if (puppy.name.toLowerCase()[0] === searchString.toLowerCase()[0]) {
              return (
                <div id="puppyListDisplay2">
                <PuppyCard puppy={puppy} />;
                </div>)
              }
          })}
    </div>
  );
};

export default PuppyList;
