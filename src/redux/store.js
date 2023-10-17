
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'

// 1. Configure store (there can be more than one store, based on what's being stored)
const store = configureStore({

    // 2. Import and add reducer
    reducer: {
        counter: counterReducer
    }
});

// Example listener function
const onStoreUpdated = () => {
    console.log('The store has been updated. Current store state:', JSON.stringify(store.getState()))
}

// Subscribe change listener function to store
store.subscribe(onStoreUpdated)

export default store;