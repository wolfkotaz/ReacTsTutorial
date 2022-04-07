import React, { useState, useEffect } from "react";

// useEffect:
// - componentDidMount
// - componentDidUpdate

const BasicExample = () => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>("Filip");

  // componentDidUpdate (on update every items)
  // useEffect(() => {
  //   console.log("On update every items");
  // });

  // componentDidMount
  useEffect(() => {
    console.log("On init");
  }, []);

  // componentDidUpdate (on update counter)
  useEffect(() => {
    console.log("On update counter");
  }, [counter]);

  // componentDidUpdate (on update name)
  useEffect(() => {
    console.log("On update name");
  }, [name]);

  // componentDidUpdate (on update counter and name)
  useEffect(() => {
    console.log("On update counter or name");
  }, [counter, name]);

  const handlerOnIncrement = () => {
    setCounter(counter + 1);
  };

  const handlerOnChangeName = () => {
    setName((prevState) => `${prevState}e`);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button className="btn-circle" onClick={handlerOnIncrement}>
        +
      </button>
      <h2>{name}</h2>
      <button className="btn" onClick={handlerOnChangeName}>
        Change name
      </button>
    </>
  );
};

export default BasicExample;
