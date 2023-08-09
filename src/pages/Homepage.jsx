import React from "react";
import { Route, Routes } from "react-router-dom";

import slides from "../mockslides.json";

import GiForeste from "../assets/icons/icons8-forest-48.png";
import GiCustomers from "../assets/icons/icons8-customer-64.png";
import GiProject from "../assets/icons/icons8-project-50.png";
import GiAwards from "../assets/icons/icons8-winners-medal-32.png";

import Navbar from "../components/Navbar";
import GalleryPage from "../components/GalleryPage";
import Contact from "./Contact";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

export const statsdata = [
	{ id: 1, image: GiForeste, emphasis: "10, 000", content: "trees planted" },
	{ id: 2, image: GiProject, emphasis: "78", content: "projects completed" },
	{ id: 3, image: GiCustomers, emphasis: "119", content: "users reached" },
	{ id: 4, image: GiAwards, emphasis: "02", content: "awards earned" },
];

const Homepage = () => {
	return (
		<div>
			<Nav />
			{/* <Carousel slides={slides} /> */}
			<Testimonials />
			<Hero />
			<Services />
			<GalleryPage />
			<Awards statsdata={statsdata} />
			<Contact />
			{/* <Routes>
				<Route path="contact" element={<Contact />} />
				<Route path="gallery" element={<GalleryPage />} />
			</Routes> */}
		</div>
	);
};

export default Homepage;

export const Awards = ({ statsdata }) => {
	return (
		<section className="py-14 bg-gradient-to-l from-green-50 to-green-100 mx-auto ">
			{/* <hr className="block w-full h-[1px] border border-secodary-green border-dashed" /> */}
			{statsdata && (
				<ul className="flex rounded-md mx-5 bg-secondary-white py-6  flex-col tablet:flex-row items-center gap-5 flex-wrap justify-center px-5 tablet:px-10 laptop:px-20">
					{statsdata.map((data) => (
						<li
							key={data.id}
							className="flex flex-col items-center gap-8  px-8 py-4 rounded text-secondary-black border border-secondary-black border-opacity-0 hover:border-opacity-10 transition-all ease-in-out duration-300 ">
							<img
								src={data.image}
								alt={data.content}
								srcset=""
								width="48"
								height="48"
							/>
							<p className="text-lg">
								<em className="not-italic font-semibold">{data.emphasis}</em>{" "}
								{data.content}
							</p>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};
