import React from "react";
import { createStore } from "redux";

// Plan
// 1. INCREMENT
// 2. DECREMENT
// 3. RESET

//  initialState Variable
const initialState = { count: 0, name: "amnul" };

//  Create Action - 1. type 2. payload ---> must return a object
const incrementCounter = "INCREMENT";
const decrementCounter = "DECREMENT";
const resetCounter = "RESET";

// Create Reducer --- 1. state 2.action ---> reducer is a funtion
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return { count: state.count + 1 };

    case decrementCounter:
      return { count: state.count - 1 };

    case resetCounter:
      return { count: 0 };

    default:
      return state;
  }
};

// Create Store
const store = createStore(counterReducer);
export default store;
