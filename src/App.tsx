import React from "react";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Cart from "./components/cart/Cart";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useRoutes,
} from "react-router-dom";

const App = () => {
	let routes = useRoutes([
		{ path: "/", element: <Homepage /> },
		{ path: "/Cart", element: <Cart /> },
	]);
	return routes;
};

const AppWrapper = () => {
	return (
		<Router>
			<App />
		</Router>
	);
};

export default AppWrapper;
