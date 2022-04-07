import React, { useReducer } from "react";
import { useEffect } from "react";
import counterReducer, { CountActionTypes } from "./reducer";
// import { reducer } from "./reducer";

const BasicExample = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  useEffect(() => {
    console.log("Count changed");
  }, [state.count]);

  return (
    <>
      <h2>{state.count}</h2>

      <button
        type="button"
        className="btn-circle"
        onClick={() =>
          dispatch({ type: CountActionTypes.INCREASE, payload: 1 })
        }
      >
        +
      </button>

      <button
        type="button"
        className="btn-circle"
        onClick={() =>
          dispatch({ type: CountActionTypes.DECREASE, payload: 1 })
        }
      >
        &#x2212;
      </button>
      <button
        className="btn-circle"
        onClick={() => dispatch({ type: CountActionTypes.RESET, payload: 0 })}
      >
        C
      </button>
    </>
  );
};

export default BasicExample;
