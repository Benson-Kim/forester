import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import icon;

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [top, setTop] = useState(true);

	useEffect(() => {
		const scrollHandler = () => {
			window.scrollY > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<nav
			className={`sticky left-0 top-0 shadow-xl bg-secondary-white text-primary-black right-0 z-20 py-6 mx-auto px-4 md:px-8 flex justify-between items-center ${
				!top && `shadow-2xl`
			}`}>
			<div className="flex items-center flex-shrink-0 mr-6 lg:mr-72">
				<img src="" className="w-100 h-10 mr-2" alt="Logo" />
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
				<div className="text-sm lg:flex-grow">
					<Link to="" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
						First Link
					</Link>
					<Link to="" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
						Second Link
					</Link>
					<Link to="" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
						Third Link
					</Link>
					<Link to="" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
						Fourth Link
					</Link>
				</div>
				<div>
					<button className="inline-flex items-center bg-secondary-green border-0 py-1.5 px-5 text-secondary-white rounded-full">
						Click Me
					</button>
				</div>
			</div>
		</nav>
	);
}
export default Nav;
