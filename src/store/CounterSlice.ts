import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  num: number;
}

const initialState: CounterState = {
  value: 0,
  num: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByMe: (state, action: PayloadAction<number>) => {
      state.num = state.value + action.payload;
    },
    // здесь можно добавить другие reducers
  },
});

export const { increment, incrementByMe } = counterSlice.actions;

export default counterSlice.reducer;
