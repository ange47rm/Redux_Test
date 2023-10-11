
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'

// 1. Configure store (there can be more than one store, based on what's being stored)
export default configureStore({

    // 2. Import and add reducer
    reducer: {
        counter: counterReducer
    }
});