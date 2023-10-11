import { useState } from "react";
import Logo from "./components/Logo.js";
import Form from "./components/Form.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/Stats.js";

// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: true },
// 	{ id: 3, description: "charger", quantity: 1, packed: false },
// ];

export default function App() {
	const [items, setItems] = useState([]);
	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}
	function handleDeleteItems(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	function handleClear() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all the items?"
		);
		if (confirmed) setItems([]);
	}
	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItems={handleDeleteItems}
				onToggleItem={handleToggleItem}
				onClear={handleClear}
			/>
			<Stats items={items} />
		</div>
	);
}
