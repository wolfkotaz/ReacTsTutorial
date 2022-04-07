import React from "react";

const ErrorExample = () => {
  let counter: number = 0;

  const handleClick = () => {
    counter += 1;
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

export default ErrorExample;
