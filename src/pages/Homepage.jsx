import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";

import slides from "../mockslides.json";

import Navbar from "../components/Navbar";
import GalleryPage from "../components/GalleryPage";
import Contact from "./Contact";
import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Home from "../components/Home";
import {
	PiFlowerDuotone,
	PiTreePalmDuotone,
	PiTrophyDuotone,
	PiUserFocusDuotone,
} from "react-icons/pi";

export const statsdata = [
	{
		id: 1,
		icon: PiTreePalmDuotone,
		emphasis: "10, 000",
		content: "trees planted",
	},
	{
		id: 2,
		icon: PiFlowerDuotone,
		emphasis: "78",
		content: "projects completed",
	},
	{
		id: 3,
		icon: PiUserFocusDuotone,
		emphasis: "119",
		content: "users reached",
	},
	{ id: 4, icon: PiTrophyDuotone, emphasis: "02", content: "awards earned" },
];

const Homepage = () => {
	return (
		<div>
			<Nav />
			<Home />
			{/* <Carousel slides={slides} /> */}
			{/* <Testimonials /> */}
			{/* <Hero /> */}
			<Services />
			<GalleryPage />
			<Awards statsdata={statsdata} />
			<Contact />
			<Routes>
				<Route path="services" element={<Services />} />
				<Route path="gallery" element={<GalleryPage />} />
				<Route path="awards" element={<Awards statsdata={statsdata} />} />
				<Route path="reviews" element={<Testimonials />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</div>
	);
};

export default Homepage;

export const Awards = ({ statsdata }) => {
	return (
		<section className="py-14 bg-white mx-auto ">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-primary-black mb-0 pb-4">
				Awards
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-primary-green" />
			<p className="text-[#95a0ab] tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				We craft digital, graphic and dimensional thinking, to create category
				leading brand experiences that <br /> have meaning and add a value for
				our clients.
			</p>
			<div className="mt-12 flex justify-center">
				<ul className="flex rounded-md py-6 flex-col tablet:flex-row gap-6 items-center flex-wrap justify-center px-5 tablet:px-10 laptop:px-20">
					{statsdata.map((data) => (
						<li
							key={data.id}
							className="group flex flex-col items-center  gap-8 px-8 rounded text-secondary-black transition-all ease-in-out duration-300 transform hover:-translate-y-2">
							<div className="text-lg h-16 w-16 mb-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-primary-white bg-customLightGreen rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-customLightGreen transition-all ease-in-out duration-300">
								<data.icon className="h-8 w-8" />
							</div>
							<p className="text-lg text-center">
								<em className="not-italic font-semibold">{data.emphasis}</em>{" "}
								{data.content}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
