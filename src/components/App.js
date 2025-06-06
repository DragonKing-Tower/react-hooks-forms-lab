import React, { createContext, useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

const AddItemsContext = createContext();

function App() {
	const [items, setItems] = useState(itemData);
	const [isDarkMode, setIsDarkMode] = useState(false);

	function addItems(newItem) {
    console.log("addingItems")
		setItems([...items, newItem]);
	}

	function handleDarkModeClick() {
		setIsDarkMode((isDarkMode) => !isDarkMode);
	}

	return (
		<div className={"App " + (isDarkMode ? "dark" : "light")}>
			<Header
				isDarkMode={isDarkMode}
				onDarkModeClick={handleDarkModeClick}
			/>
			<AddItemsContext.Provider value={{ addItems }}>
				<ShoppingList items={items} />
			</AddItemsContext.Provider>
		</div>
	);
}

export default App;
export { AddItemsContext };
