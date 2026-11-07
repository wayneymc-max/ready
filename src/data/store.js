import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./foodsSlice";

export const store = configureStore({
    reducer: {
        foods: foodsReducer,
    },
});