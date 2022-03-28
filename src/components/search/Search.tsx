import React, { useEffect, useMemo, useState } from "react";

export default function Search(props: {
	data: any;
	permData: any;
	setPermData: any;
}) {
	const { data, permData, setPermData } = props;
	const [inputVal, setInputVal] = useState({
		min: 0,
		max: 0,
	});
	const [sortVal, setSortVal] = useState("Price Asc");
	const [searchVal, setSearchVal] = useState("");

	const sortData = ["Price Asc", "Price Desc", "Title Asc", "Title Desc"];

	const filterAll = useMemo(() => {
		let tempData = [...data];
		if (searchVal.length > 0) {
			tempData = tempData.filter((product: any) => {
				return product.title
					.toLowerCase()
					.includes(searchVal.toLocaleLowerCase());
			});
		}
		if (inputVal.min > 0 || inputVal.max > 0) {
			tempData = tempData.filter((product: { price: number }) => {
				return product.price >= inputVal.min && product.price <= inputVal.max;
			});
		}
		if (sortVal.length > 0) {
			tempData.sort((a: any, b: any) => {
				if (sortVal === "Price Asc") {
					return a.price - b.price;
				} else if (sortVal === "Price Desc") {
					return b.price - a.price;
				} else if (sortVal === "Title Asc") {
					return a.title.localeCompare(b.title);
				} else if (sortVal === "Title Desc") {
					return b.title.localeCompare(a.title);
				}
			});
		}
		setPermData(tempData);
	}, [inputVal, sortVal, searchVal]);
	return (
		<>
			<select onChange={(e) => setSortVal(e.target.value)}>
				{sortData.map((option) => (
					<option value={option}>{option}</option>
				))}
			</select>

			<div className="min-max-container">
				<input
					type="text"
					value={inputVal.min}
					name="min"
					onChange={(e) =>
						setInputVal({
							...inputVal,
							[e.target.name]: e.target.value,
						})
					}
				/>
				<input
					type="text"
					value={inputVal.max}
					name="max"
					onChange={(e) =>
						setInputVal({
							...inputVal,
							[e.target.name]: e.target.value,
						})
					}
				/>
			</div>
			<div>
				<input
					type="text"
					placeholder="Search products"
					onChange={(e) => setSearchVal(e.target.value)}
				/>
			</div>
			{/* <button onClick={filterAll}>Submit all</button> */}
		</>
	);
}
