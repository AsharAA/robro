import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className=" code br3 pa3 ba b--blue bg-washed-yellow"
        type="search"
        placeholder="robr0z"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
