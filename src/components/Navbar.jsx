import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <input id ={"searchBarInput"} type={"text"} placeholder={"Search here"}></input>
      <button id="searchBarButton">ENTER</button>
    </div>
  );
};

export default Navbar;