import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState:{
        items:[], //empty list for serchinf items 
        searchTerm:''
    },
    reducers:{
        // list of items 
        setItems(state, action) {
            state.items = action.payload;
        },
        // update search 
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

// action creater
export const {setItems, setSearchTerm } = itemsSlice.actions;
//seletors for state value of items and search
export const selectItems = state => state.items.items;
export const selectSearchTerm = state => state.items.searchTerm;

//reducer to be used in the Redux store
export default itemsSlice.reducer; 