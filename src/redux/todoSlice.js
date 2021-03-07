import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    // updateTodo: (state, action) => {

    // },
    // deleteTodo: (state, action) => {

    // },
    saveTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveTodo } = todoSlice.actions;

export default todoSlice.reducer;
