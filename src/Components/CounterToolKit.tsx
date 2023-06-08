import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment } from "../store/CounterSlice";

const CounterToolKit = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterToolKit;
