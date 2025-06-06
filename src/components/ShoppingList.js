import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [search, setSearch] = useState(""); //state here, so that the item form can get to it

	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value);
	}

	function handleInputChange(e) {
		//control the component
		setSearch(e.target.value);
	}

	function nameMatcher(name, itemName) {
		if (name === "") {
			//checks to see if the searchbar has something, then checks for a match
			return true;
		}
		return itemName.toLowerCase().includes(name.toLowerCase());
	}

	const itemsToDisplay = items.filter((item) => {
		//updated this to take the nameMatcher into accout
		if (nameMatcher(search, item.name)) {
			if (selectedCategory === "All") return true;

			return item.category === selectedCategory;
		}
		return false;
	});

	return (
		<div className="ShoppingList">
			<ItemForm items={items} />
			<Filter
				onCategoryChange={handleCategoryChange}
				onSearchChange={handleInputChange}
				search={search}
			/>
			<ul className="Items">
				{itemsToDisplay.map((item) => (
					<Item
						key={item.id}
						name={item.name}
						category={item.category}
					/>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
