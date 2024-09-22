import React from 'react';
import { useDispatch, useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from '../redux/itemsSlice';

//filter items by user input
const SearchBar = () =>{
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);
};

//update searched item in ui
const  handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
};

export default function SearchBar() {
  return (
    <div>
        {/* input fild */}
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search items here....'
      />
    </div>
  )
}
