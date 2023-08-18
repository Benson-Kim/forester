import React from "react";

import GalleryPage from "../components/GalleryPage";
import Contact from "./Contact";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Team from "../components/Team";
import Blogs from "../components/Blog";
import Quotes from "../components/Quotes";
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
			<Services />
			<GalleryPage />
			<Awards statsdata={statsdata} />
			<Testimonials />
			<Team />
			<Blogs />
			<Quotes />
			<Contact />
		</div>
	);
};

export default Homepage;

export const Awards = ({ statsdata }) => {
	return (
		<section id="awards" className="py-14 mx-auto ">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				Awards
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				In the Spotlight of Excellence: Our Awards Stand as Beacon Markers on
				the Journey <br /> Towards Sustainable Forest Preservation
			</p>
			<div className="mt-12 flex justify-center">
				<ul className="flex rounded-md py-6 flex-col tablet:flex-row gap-6 items-center flex-wrap justify-center px-5 tablet:px-10 laptop:px-20">
					{statsdata.map((data) => (
						<li
							key={data.id}
							className="group flex flex-col items-center  gap-8 px-8 rounded text-secondary-black transition-all ease-in-out duration-300 transform hover:-translate-y-2">
							<div className="text-lg h-16 w-16 mb-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-primary-white bg-customGreen rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-customGreen transition-all ease-in-out duration-300">
								<data.icon className="h-8 w-8" />
							</div>
							<p className="text-lg text-center text-secondary-white">
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
