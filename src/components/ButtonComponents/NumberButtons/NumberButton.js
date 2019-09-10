import React from "react";

export const NumberButton = (props) => {
  const {item} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{item}</button>
    </>
  );
};
