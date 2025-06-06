import React from "react";

function Filter({ onCategoryChange, nameMatch, onSearchChange }) {
	return (
		<div className="Filter">
			<input
				type="text"
				name="search"
				placeholder="Search..."
				onChange={(e) => {
					onSearchChange(e);
				}}
				value={nameMatch}
			/>
			<select name="filter" onChange={onCategoryChange}>
				<option value="All">Filter by category</option>
				<option value="Produce">Produce</option>
				<option value="Dairy">Dairy</option>
				<option value="Dessert">Dessert</option>
			</select>
		</div>
	);
}

export default Filter;
