// src/components/ItemList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectSearchTerm } from '../redux/itemsSlice';
import Item from './Item';

// ItemList component displays filtered list based on the search input
const ItemList = () => {
    const items = useSelector(selectItems); // Access the list of items from Redux state
    const searchTerm = useSelector(selectSearchTerm); // Access the current search term

    // Filter the items based case-insensitive match
    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mt-4 grid grid-cols-2 gap-4">
            {filteredItems.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
