import React from "react";

const Navbar = (props) => {
  const setSearchString = props.setSearchString;
  const searchString = props.searchString;
  return (
    <div id="navbar">
      <input
        id={"searchBarInput"}
        type={"text"}
        placeholder={"Search here"}
      ></input>
      <button
        onClick={() => {
          setSearchString(document.getElementById("searchBarInput").value);
          console.log(searchString);
          document.getElementById("searchBarInput").value = "";
        }}
        id="searchBarButton"
      >
        ENTER
      </button>
      <button
        onClick={() => {
          setSearchString("");
        }}
        id="searchBarButton"
      >
        RESET
      </button>
    </div>
  );
};

export default Navbar;
