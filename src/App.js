import React from "react";

import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
// import BlogPost from "./pages/BlogPost";
import NoMatch from "./components/NoMatch";
import BlogDetails from "./components/BlogDetails";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div className="bg-primary-black font-poppins">
			<Nav />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/blog/:slug" element={<BlogDetails />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</div>
	);
};

export default App;
