export default function Stats({ items }) {
	if (!items.length) {
		return (
			<footer className='stats'>
				<p>start adding items to your packing list</p>
			</footer>
		);
	}
	const numItems = items.length;
	const packedItems = items.filter((item) => item.packed).length;
	const percentItem = Math.round((packedItems / numItems) * 100);
	return (
		<footer className='stats'>
			{percentItem === 100 ? (
				<em>You are all set to go</em>
			) : (
				<em>
					You have {numItems} items in your list, and you already packed
					{packedItems} ({percentItem}%)
				</em>
			)}
		</footer>
	);
}
