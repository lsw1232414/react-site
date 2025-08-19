// src/js/store_redux.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./store_redux_slice";

const store_redux = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store_redux;   // ✅ 꼭 있어야 함
