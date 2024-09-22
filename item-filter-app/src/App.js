import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import Redux store
import ItemList from './components/ItemList'; // ItemList component
import SearchBar from './components/SearchBar'; // SearchBar component
import AddItem from './components/AddItem'; //Add item component
import Header from './components/Header';
import { setItems } from './redux/itemsSlice'; // Action to set the items

// App component
const App = () => {
    useEffect(() => {
        // sample items to display on ui
        const items = ['Watches', 'Belt', 'Gogals', 'Bags', 'Parce','Gift Items','Pen','Books'];

        // Dispatch action to set items in Redux state
        store.dispatch(setItems(items));
    }, []);

    return (
        // Wrap the entire app in the Redux Provider
        <Provider store={store}>
            <div className="container mx-auto p-4">
                <Header />
                <SearchBar /> {/* search bar component */}
                <AddItem />
                <ItemList /> {/*filtered item list and add item list */}
            </div>
        </Provider>
    );
};

export default App;
