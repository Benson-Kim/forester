import React from "react";

import Navbar from "../components/Navbar";

import GalleryPage from "../components/GalleryPage";
import Contact from "./Contact";

const Homepage = () => {
	return (
		<div>
			<Navbar />
			<GalleryPage />
			<Contact />
		</div>
	);
};

export default Homepage;
