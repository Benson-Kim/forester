import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navlinks = [
	{
		id: 1,
		title: "services",
	},
	{
		id: 2,
		title: "gallery",
	},
	{
		id: 3,
		title: "awards",
	},
	{
		id: 4,
		title: "testimonials",
	},
	{
		id: 5,
		title: "team",
	},
	{
		id: 6,
		title: "blog",
	},
	{
		id: 7,
		title: "contact",
	},
];

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [top, setTop] = useState(true);

	useEffect(() => {
		const scrollHandler = () => {
			window.scrollY > 20 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<nav
			className={`sticky left-0 top-0 text-secondary-white right-0 z-20 py-6 mx-auto px-4 md:px-8 flex justify-between items-center ${
				!top && `bg-primary-black`
			}`}>
			<div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
				<ScrollLink
					to="home"
					smooth={true}
					duration={500}
					className="cursor-pointer transition-all ease-in duration-300">
					<img src="" className="w-100 h-10 mr-2" alt="Logo" />
				</ScrollLink>
			</div>
			<div className="block lg:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center px-3 py-2 rounded text-primary-black hover:text-secondary-black">
					<svg
						className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
					<svg
						className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
					</svg>
				</button>
			</div>
			<div
				className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
					isOpen ? "block" : "hidden"
				}`}>
				<ul className=" flex lg:flex-grow font-rubik tracking-wider">
					{navlinks.map((linkitem) => (
						<li
							key={linkitem.id}
							className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-secondary-white border-opacity-0 hover:border-opacity-100 transition-all ease-in duration-300 ">
							<ScrollLink
								to={linkitem.title}
								smooth={true}
								duration={500}
								offset={-60}
								className="cursor-pointer mx-3.5 py-3.5 font-light capitalize ">
								{linkitem.title}
							</ScrollLink>
						</li>
					))}
				</ul>
				<div>
					<button className="inline-flex items-center bg-secondary-white border-0 py-1.5 px-5 text-secondary-black rounded-full hover:bg-secondary-black hover:text-customLight transition-all ease-in duration-300">
						Click Me
					</button>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
