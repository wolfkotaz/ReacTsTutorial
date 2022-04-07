import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { factorialOf } from "../utils/factorial";

interface IMemoChildProps {
  counter: number;
  onClick(): void;
}

const Memo = () => {
  const [counter, setCounter] = useState<number>(0);
  const [other, setOther] = useState<number>(0);

  const handleOnClick = useCallback(() => {
    console.log(`Clicked - ${counter}`);
  }, [counter]);

  // const handleOnClick = () => {
  //   console.log(`Clicked - ${counter}`);
  // };

  return (
    <>
      <h2>
        counter: {counter} --- other: {other}
      </h2>

      <button className="btn-circle" onClick={() => setCounter(counter + 1)}>
        1
      </button>
      <button className="btn-circle" onClick={() => setOther(other + 1)}>
        2
      </button>

      <MemoChild counter={counter} onClick={handleOnClick} />
    </>
  );
};

const MemoChild = React.memo(({ counter, onClick }: IMemoChildProps) => {
  console.log("MemoChild ---> re-rendered");

  return (
    <>
      <h2>I am memo child: {counter}</h2>
      <button className="btn" onClick={onClick}>
        Click me
      </button>
    </>
  );
});

const CalculateFactorial = () => {
  const [number, setNumber] = useState<number>(1);
  const [counter, setCounter] = useState<number>(0);

  const factorial = useMemo(() => factorialOf(number), [number]);
  // const factorial = factorialOf(number);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(event.target.value));
  };

  const onClick = () => setCounter((prevCounter) => prevCounter + 1);

  return (
    <div>
      <h2>Factorial of</h2>
      <input type="number" value={number} onChange={onChange} />
      <h2>is {factorial}</h2>
      <h2>re-render counter: {counter}</h2>
      <button className="btn" onClick={onClick}>
        Re-render
      </button>
    </div>
  );
};

export default Memo;
