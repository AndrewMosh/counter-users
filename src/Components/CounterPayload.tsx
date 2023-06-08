import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { incrementByMe } from "../store/CounterSlice";
interface MyComponentState {
  inputValue: number;
}

const CounterPayload = () => {
  const [state, setState] = useState<MyComponentState>({ inputValue: 0 });
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.num);

  const handleIncrement = () => {
    dispatch(incrementByMe(state.inputValue));
  };
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState({ inputValue: parseInt(value) });
  };
  return (
    <div>
      <input type="number" onChange={handleOnChange} />
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterPayload;
