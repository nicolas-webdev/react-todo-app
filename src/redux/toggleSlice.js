import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    toggle: (state) => (state = !state),
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = toggleSlice.actions;

export default toggleSlice.reducer;
