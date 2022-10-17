import { configureStore } from "@reduxjs/toolkit";
import siteReducer from './siteReducer';

const store = configureStore({
    reducer: {
        siteReducer: siteReducer, 
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;