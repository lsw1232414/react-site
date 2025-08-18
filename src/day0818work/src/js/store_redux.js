import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./store_redux_slice";

export const store_redux = configureStore({
    reducer: {
        counter: counterReducer
    }
});
