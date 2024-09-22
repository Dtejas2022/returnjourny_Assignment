import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from '../redux/itemsSlice';

// user to filter items based on the input
const SearchBar = () => {
    const dispatch = useDispatch(); // Use dispatch to send actions to Redux
    const searchTerm = useSelector(selectSearchTerm); // Access the current search term from Redux state

    // action to update the search term
    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <input 
            type="text" 
            value={searchTerm} 
            onChange={handleChange} 
            placeholder="Search items..." 
            className="border-2 p-2 rounded w-full mt-4"
        />
    );
};

export default SearchBar;
