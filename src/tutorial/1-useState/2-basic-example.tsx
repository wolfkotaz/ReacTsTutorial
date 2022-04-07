import React, { useState } from "react";

const BasicExample = () => {
  // console.log(useState<number>(0));
  const [counter, setCounter] = useState<number>(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button type="button" className="btn-circle" onClick={handleClick}>
        +
      </button>
    </>
  );
};

export default BasicExample;
