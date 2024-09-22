import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from './itemsSlice';


//redux store
const store = configureStore({
    reducer:{
        items: itemsReducer //item state manages here
    }
});

export default store;