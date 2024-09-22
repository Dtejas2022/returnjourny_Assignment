import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemsSlice';
// import { setItems } from '../redux/itemsSlice';

const AddItem = () => {
    const [newItem, setNewItem] = useState(''); //to manage new item adding
    const dispatch = useDispatch();

    const handleAddItem = () => { //button handeler for adding new item
        if (newItem.trim()) {
            dispatch(addItem(newItem));
            setNewItem(''); // Clear the input field after adding the item
        }
    };

    return (
        <div className="mt-4">
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)} //read value from user input 
                placeholder="Add a new item..."
                className="border-2 p-2 rounded mr-2"
            />
            <button
                onClick={handleAddItem}  //above dicleared handler
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Item
            </button>
        </div>
    );
};

export default AddItem;