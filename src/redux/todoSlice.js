import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // updateTodo: (state, action) => {

    // },
    // deleteTodo: (state, action) => {

    // },
    saveTodo: (state, action) => {
      return (state = [action.payload, ...state]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveTodo } = todoSlice.actions;

export default todoSlice.reducer;
