import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

// import icon;

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
			className={`sticky left-0 top-0  text-customLight right-0 z-20 py-6 mx-auto px-4 md:px-8 flex justify-between items-center ${
				!top && `bg-secondary-black`
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
				<ul className=" flex  lg:flex-grow font-poppins">
					<li className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-secondary-white border-opacity-0 hover:border-opacity-100 transition-all ease-in duration-300 ">
						<ScrollLink
							to="services"
							smooth={true}
							duration={500}
							className="cursor-pointer mx-3.5 py-3.5 font-light ">
							Services
						</ScrollLink>
					</li>
					<li className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-secondary-white border-opacity-0 hover:border-opacity-100 transition-all ease-in duration-300 ">
						<ScrollLink
							to="gallery"
							smooth={true}
							duration={500}
							className="cursor-pointer mx-3.5 py-3.5 font-light  ">
							Gallery
						</ScrollLink>
					</li>
					<li className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-secondary-white border-opacity-0 hover:border-opacity-100 transition-all ease-in duration-300 ">
						<ScrollLink
							to="awards"
							smooth={true}
							duration={500}
							className="cursor-pointer mx-3.5 py-3.5 font-light">
							Awards
						</ScrollLink>
					</li>
					<li className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-secondary-white border-opacity-0 hover:border-opacity-100 transition-all ease-in duration-300 ">
						<ScrollLink
							to="reviews"
							smooth={true}
							duration={500}
							className="cursor-pointer mx-3.5 py-3.5 font-light ">
							Testimonials
						</ScrollLink>
					</li>
					<li className="block mt-4 lg:inline-block lg:mt-0 border-b-2 border-secondary-white border-opacity-0 hover:border-opacity-100 transition-all ease-in duration-300 ">
						<ScrollLink
							to="contact"
							smooth={true}
							spy={true}
							duration={500}
							offset={-95}
							className="cursor-pointer mx-3.5 py-3.5 font-light">
							Contact
						</ScrollLink>
					</li>
				</ul>
				<div>
					<button className="inline-flex items-center bg-customLight border-0 py-1.5 px-5 text-secondary-black rounded-full hover:bg-secondary-black hover:text-customLight transition-all ease-in duration-300">
						Click Me
					</button>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
