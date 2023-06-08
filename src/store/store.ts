import { UserState } from "./types";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import counterReducer from "./CounterSlice";
import { CounterState } from "./CounterSlice";
export type RootState = {
  user: UserState;
  counter: CounterState;
};

const rootReducer = configureStore({
  reducer: { user: userReducer, counter: counterReducer },
});

export default rootReducer;
