import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import toggleReducer from "./toggleSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    toggle: toggleReducer,
  },
});
