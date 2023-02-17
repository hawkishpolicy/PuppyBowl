import React, { useState, useEffect } from "react";
import callDatabase from "./api";
import { useParams, Link } from "react-router-dom";
import { DetailedPuppyCard } from "./";

const Details = () => {
  const [puppies, setPuppies] = useState([]);

  const getPuppies = async () => {
    const newPuppies = await callDatabase();

    setPuppies(newPuppies);
  };

  useEffect(() => {
    getPuppies();
  }, []);

  let { name } = useParams();

  return (
    <div>
      {puppies.map((puppy, idx) => {
        if (puppy.name === name) {
          return <DetailedPuppyCard puppy={puppy} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Details;
