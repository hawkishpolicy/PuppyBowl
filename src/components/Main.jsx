import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { callDatabase, PuppyList, Footer } from "./";

const Main = () => {
  const [puppies, setPuppies] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getPuppies = async () => {
    const newPuppies = await callDatabase();
    setPuppies(newPuppies);
  };

  useEffect(() => {
    getPuppies();
  }, []);

  return (
    <div id="main">
      <Navbar searchString={searchString} setSearchString={setSearchString} />
      <PuppyList searchString={searchString} puppies={puppies} />
      <Footer/>
    </div>
  );
};

export default Main;
