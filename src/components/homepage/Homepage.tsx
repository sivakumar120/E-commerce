import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/Search";
import "./Homepage.css";
import img1 from "../../public/images/img1.webp";
import img2 from "../../public/images/img2.webp";
import img3 from "../../public/images/img3.webp";
import img4 from "../../public/images/img4.webp";
import img5 from "../../public/images/img5.webp";
import img6 from "../../public/images/img6.webp";
import img7 from "../../public/images/img7.webp";
import img8 from "../../public/images/img8.webp";
import img9 from "../../public/images/img9.webp";
import img10 from "../../public/images/img10.webp";
import img11 from "../../public/images/img11.webp";
import img12 from "../../public/images/img12.webp";
import img13 from "../../public/images/img13.webp";
import img14 from "../../public/images/img14.webp";
import img15 from "../../public/images/img15.webp";
import img16 from "../../public/images/img16.webp";
import img17 from "../../public/images/img17.webp";
import img18 from "../../public/images/img18.webp";
import img19 from "../../public/images/img19.webp";
import img20 from "../../public/images/img20.webp";

export default function Homepage() {
	const data = [
		{
			img: img1,
			title: "TRIPR",
			price: 200,
			fixedPrice: 200,
			qty: 0,
		},
		{
			img: img2,
			title: "AUSK",
			price: 350,
			fixedPrice: 350,
			qty: 0,
		},
		{
			img: img3,
			title: "JUMP CUTS",
			price: 420,
			fixedPrice: 420,
			qty: 0,
		},
		{
			img: img4,
			title: "CLASSIC POLO",
			price: 200,
			fixedPrice: 200,
			qty: 0,
		},
		{
			img: img5,
			title: "LARRY & EVA",
			price: 380,
			fixedPrice: 380,
			qty: 0,
		},
		{
			img: img6,
			title: "EYEBOGLER",
			price: 550,
			fixedPrice: 550,
			qty: 0,
		},
		{
			img: img7,
			title: "MANHOOD",
			price: 600,
			fixedPrice: 600,
			qty: 0,
		},
		{
			img: img8,
			title: "AWG",
			price: 200,
			fixedPrice: 200,
			qty: 0,
		},
		{
			img: img9,
			title: "ROCK HARD",
			price: 375,
			fixedPrice: 375,
			qty: 0,
		},
		{
			img: img10,
			title: "LONDON HILLS",
			price: 500,
			fixedPrice: 500,
			qty: 0,
		},
		{
			img: img11,
			title: "BEGGIE",
			price: 780,
			fixedPrice: 780,
			qty: 0,
		},
		{
			img: img12,
			title: "TUSK",
			price: 880,
			fixedPrice: 880,
			qty: 0,
		},
		{
			img: img13,
			title: "POLOS",
			price: 935,
			fixedPrice: 935,
			qty: 0,
		},
		{
			img: img14,
			title: "SEVEN ROCKS",
			price: 275,
			fixedPrice: 275,
			qty: 0,
		},
		{
			img: img15,
			title: "LINEN",
			price: 1200,
			fixedPrice: 1200,
			qty: 0,
		},
		{
			img: img16,
			title: "FANCY",
			price: 1050,
			fixedPrice: 1050,
			qty: 0,
		},
		{
			img: img17,
			title: "POLO",
			price: 900,
			fixedPrice: 900,
			qty: 0,
		},
		{
			img: img18,
			title: "SIMEX",
			price: 926,
			fixedPrice: 926,
			qty: 0,
		},
		{
			img: img19,
			title: "ADIDAS",
			price: 1600,
			fixedPrice: 1600,
			qty: 0,
		},
		{
			img: img20,
			title: "Jockey",
			price: 1250,
			fixedPrice: 1250,
			qty: 0,
		},
	];

	const navigate = useNavigate();

	const [permData, setPermData] = useState(data);

	const cartFunction = (name: string) => {
		let clickedProduct = permData.filter((product) => {
			if (name == product.title) {
				product.qty++;
				return product;
			}
		});

		navigate("/Cart", { state: clickedProduct });
	};

	return (
		<>
			<Search permData={permData} setPermData={setPermData} data={data} />
			<div className="data-grid">
				{permData.map((shirt, index) => (
					<div>
						<div className="shirt-img">
							<img src={shirt.img} alt="img" />
						</div>
						<div className="shirt-title">
							<h3>{shirt.title}</h3>
						</div>
						<div className="shirt-price">
							<p>{shirt.price}</p>
						</div>
						<button onClick={() => cartFunction(shirt.title)}>
							Add to cart
						</button>
					</div>
				))}
			</div>
		</>
	);
}
