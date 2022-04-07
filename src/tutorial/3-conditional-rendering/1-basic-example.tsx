import React, { useState } from "react";

const BasicExample = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleOnResetCounter = () => {
    setCounter(0);
  };

  if (counter < 0) {
    return <h2 onClick={handleOnResetCounter}>Too low value</h2>;
  }

  if (counter > 10) {
    return <h2 onClick={handleOnResetCounter}>Too big value</h2>;
  }

  return (
    <>
      <h2>{counter}</h2>
      <button type="button" className="btn-circle" onClick={handleIncrement}>
        +
      </button>
      <button type="button" className="btn-circle" onClick={handleDecrement}>
        &#x2212;
      </button>
    </>
  );
};

export default BasicExample;
