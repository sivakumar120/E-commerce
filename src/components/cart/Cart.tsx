import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Cart() {
	const location = useLocation();
	const [productData, setProductData] = useState<any>();
	const [qtyCount, setQtyCount] = useState(0);
	useEffect(() => {
		console.log(location.state);
		setProductData(location.state);
	}, []);

	const incrementorDecrementor = (dc: boolean) => {
		productData.map((product: any) => {
			product.qty = dc ? product.qty + 1 : product.qty - 1;
			product.price = product.qty * product.fixedPrice;
		});
		setProductData([...productData]);
	};

	return (
		<>
			{productData &&
				productData.map(
					(pr: {
						title:
							| boolean
							| React.ReactChild
							| React.ReactFragment
							| React.ReactPortal
							| null
							| undefined;
						price:
							| boolean
							| React.ReactChild
							| React.ReactFragment
							| React.ReactPortal
							| null
							| undefined;
						qty:
							| boolean
							| React.ReactChild
							| React.ReactFragment
							| React.ReactPortal
							| null
							| undefined;
					}) => (
						// <div>
						// 	<img src={pr.img} alt="" />
						// </div>
						<>
							<div>{pr.title}</div>
							<div>{pr.price}</div>
							<button onClick={() => incrementorDecrementor(true)}>+</button>
							<div>{pr.qty}</div>
							<button onClick={() => incrementorDecrementor(false)}>-</button>
						</>
					)
				)}
		</>
	);
}
