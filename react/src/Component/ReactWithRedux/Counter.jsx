import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Counter() {
  const selector = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const incrementCounter = "INCREMENT";
  const decrementCounter = "DECREMENT";
  const resetCounter = "RESET";

  return (
    <div>
      <h2 style={{ fontSize: "50px", textAlign: "center" }}>{selector}</h2>
      <button
        style={{
          marginRight: "10px",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
        }}
        onClick={() => dispatch({ type: incrementCounter, payload: 10 })}
      >
        Increment
      </button>
      <button
        style={{
          marginRight: "10px",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
        }}
        onClick={() => dispatch({ type: decrementCounter, payload: 5 })}
      >
        Decrement
      </button>
      <button
        style={{
          marginRight: "10px",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
        }}
        onClick={() => dispatch({ type: resetCounter })}
      >
        Reset
      </button>
    </div>
  );
}
