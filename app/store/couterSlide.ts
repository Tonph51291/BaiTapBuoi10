import { AnyAction, createAction, createSlice } from "@reduxjs/toolkit";
export const RESET_COUNTER = createAction("RESET_COUNTER");
export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};

export const counterSlide = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    binhPhuong: (state) => {
      state.value *= state.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RESET_COUNTER, (state, action) => {
      state.value = initialState.value;
    });
  },
});
export const { increment, decrement, binhPhuong } = counterSlide.actions;
export default counterSlide.reducer;
