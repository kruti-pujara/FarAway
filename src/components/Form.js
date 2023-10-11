import { useState } from "react";

export default function Form({ onAddItems }) {
	const [desc, setDesc] = useState("");
	// shirts
	const [quantity, setQuantity] = useState(1);
	// 2
	function handleSubmit(e) {
		// console.log(e);
		e.preventDefault();

		if (!desc) return;
		const newItem = { desc, quantity, packed: false, id: Date.now() };
		// console.log(newItem);
		onAddItems(newItem);
		setDesc("");
		setQuantity(1);
	}

	return (
		<form className='add-form' onSubmit={handleSubmit}>
			<h3>What do you nedd for your trip?</h3>
			<select
				value={quantity}
				onChange={(e) => {
					// console.log(e.target.value);
					setQuantity(Number(e.target.value));
				}}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type='text'
				placeholder='Items.. '
				value={desc}
				onChange={(e) => {
					// console.log(e.target);
					setDesc(e.target.value);
				}}
			/>
			<button type='submit'>Add</button>
		</form>
	);
}
