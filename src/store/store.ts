import { UserState } from "./types";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

export type RootState = {
  user: UserState;
};

const rootReducer = configureStore({
  reducer: { user: userReducer },
});

export default rootReducer;
