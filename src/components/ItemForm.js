import React, { useContext, useState } from "react";
import { AddItemsContext } from "./App.js";
import { v4 as uuid } from "uuid";

function ItemForm(items) {
	const { addItems } = useContext(AddItemsContext);

	const [state, setState] = useState({
		nameInput: "",
		categoryInput: "Produce",
	});

	function updateInput(e, type) {
		setState({ ...state, [type]: e.target.value });
	}

	function cleanInput() {
		setState({ nameInput: "", categoryInput: "Produce" });
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (state.nameInput) {
			const newItem = {
				id: uuid(),
				name: state.nameInput,
				category: state.categoryInput,
			};
			addItems(newItem);
			cleanInput();
		}
	}

	return (
		<form
			className="NewItem"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={state.nameInput}
					onChange={(e) => updateInput(e, "nameInput")}
				/>
			</label>

			<label>
				Category:
				<select
					name="category"
					value={state.categoryInput}
					onChange={(e) => updateInput(e, "categoryInput")}
				>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</label>

			<button type="submit">Add to List</button>
		</form>
	);
}

export default ItemForm;
