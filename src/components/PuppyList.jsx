import React from "react";
import { PuppyCard } from "./";

const PuppyList = (props) => {
  const puppies = props.puppies;
  const searchString = props.searchString;

  return (
    <div id="puppyListDisplay">
      {!searchString
        ? puppies.map((puppy) => {
            return <PuppyCard puppy={puppy} />;
          })
        : puppies.map((puppy) => {
            if (puppy.name === searchString) {
              return <PuppyCard puppy={puppy} />;
            } else if (puppy.name[0] === searchString[0]) {
              return <PuppyCard puppy={puppy} />;
            }
          })}
    </div>
  );
};

export default PuppyList;
