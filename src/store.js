import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./features/toggleSlice"

const store = configureStore({
    reducer: {
    toggleSlice: toggleSlice.reducer,
    }
})

export default store;