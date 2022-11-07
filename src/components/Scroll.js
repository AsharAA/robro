import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid #6D9886",
        height: "500px",
      }}
      className="br4"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
