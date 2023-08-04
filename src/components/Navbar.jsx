import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-modal";

import LoginForm from "../pages/LoginForm";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setIsScrolled(scrollTop > 0);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<nav
			className={`fixed top-0 bg-slate-950 w-full z-10 py-4 ${
				isScrolled ? "bg-gradient-to-b from-primary-green to-orange" : ""
			}`}>
			<div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
				{/* Logo  */}
				<div className="text-white font-bold text-xl">Logo</div>

				<ul className="hidden md:flex space-x-4">
					{/* Links  */}
					<li>
						<NavLink
							to="/"
							exact
							activeClassName="text-blue-500"
							className="text-white">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							activeClassName="text-blue-500"
							className="text-white">
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							activeClassName="text-blue-500"
							className="text-white">
							Contact
						</NavLink>
					</li>
				</ul>

				{/* Login/Register buttons  */}
				<div className="hidden md:flex space-x-4">
					<button
						className="text-white bg-transparent border border-white rounded px-4 py-2"
						onClick={openModal}>
						Login
					</button>
					<button
						className="text-white bg-transparent border border-white rounded px-4 py-2"
						onClick={openModal}>
						Register
					</button>
				</div>

				{/* Modal for login/register forms */}
				<Modal
					isOpen={showModal}
					onRequestClose={closeModal}
					contentLabel="Login/Register Modal"
					className="modal"
					overlayClassName="modal-overlay">
					{/* Your custom login/register form */}
					<div className="p-4 bg-white">
						<h2 className="text-xl font-bold mb-4">Login/Register</h2>
						<LoginForm />
						<button className="bg-blue-500 text-white rounded px-4 py-2">
							Close Modal
						</button>
					</div>
				</Modal>
			</div>
		</nav>
	);
};

export default Navbar;
