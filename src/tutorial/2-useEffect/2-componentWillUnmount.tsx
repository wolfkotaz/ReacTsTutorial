import React, { useState, useEffect } from "react";

// useEffect:
// - componentWillUnmount

const ComponentWillUnmount = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <h2>{size}</h2>
    </>
  );
};

export default ComponentWillUnmount;
