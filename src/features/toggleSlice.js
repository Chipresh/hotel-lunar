import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggle: false,
  },

  reducers: {
    toggleMenu(state) {
      state.toggle = !state.toggle
    }
  }
});

export default toggleSlice;