import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
	const [quantity, setQuantity] = useState(1);
	const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of Ice cream - {numOfIceCreams}</h2>
			<button onClick={() => dispatch(ordered())}>Order ice cream</button>
			<input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
			<button onClick={() => dispatch(restocked(+quantity))}>Restock ice creams</button>
		</div>
	);
};
export default IceCreamView;
