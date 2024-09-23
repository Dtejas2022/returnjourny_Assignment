// import React from "react";

// const Item = React.memo(({item})=>{ //prevent unusefull rendering
//     return <div className="bg-gray-200 p-4 rounded shadow-md">{item}</div>; //single render
// });

// export default Item;


import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/itemsSlice';

const Item = React.memo(({ item }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(item));  // Dispatch action to delete the item
    };

    return (
        <div className="flex justify-between items-center p-2 border-b">
            <span>{item}</span>
            <button
                onClick={handleDelete}
                className="bg-blue-500 hover:bg-red-500 text-white px-2 py-1 rounded"
            >
                Delete
            </button>
        </div>
    );
});

export default Item;
