import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { callDatabase, PuppyList, } from "./";

const Main = () => {
  const [puppies, setPuppies] = useState([]);

  const getPuppies = async () => {
    const newPuppies = await callDatabase();
    setPuppies(newPuppies);
    console.log(puppies);
  };

  useEffect(() => {
    getPuppies();
    console.log(puppies);
  }, []);

  return (
    <div id="main">
      <Navbar />
      
      <PuppyList puppies = {puppies}/>
    </div>
  );
};

export default Main;
