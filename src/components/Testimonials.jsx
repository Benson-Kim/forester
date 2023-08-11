import React, { useState, useEffect } from "react";

import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

const images = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1518676527964-e006f33f3667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhJTIwdHJlZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", // Unsplash image link
		alt: "Forest Image 1",
		description:
			"A serene forest with tall trees and sunlight filtering through leaves.",
	},
	{
		id: 2,
		src: "https://media.istockphoto.com/id/487646894/photo/coffee-tree-nursery.webp?b=1&s=170667a&w=0&k=20&c=b7-bNJEcsOjPEhmQXi4LLCvEaPMr1c5vMCzLvV6lXuA=", // Unsplash image link
		alt: "Forest Image 2",
		description:
			"Misty morning in the woods, creating an enchanting atmosphere.",
	},
	// Add more images as needed
];

const Testimonials = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const prevImage = () => {
		setCurrentImage((prevImage) =>
			prevImage === 0 ? images.length - 1 : prevImage - 1,
		);
	};

	const nextImage = () => {
		setCurrentImage((prevImage) =>
			prevImage === images.length - 1 ? 0 : prevImage + 1,
		);
	};

	useEffect(() => {
		const interval = setInterval(nextImage, 5000); // Autoplay interval: 5 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative h-[348px] overflow-hidden">
			{images.map((image, index) => (
				<div
					key={image.id}
					className={`absolute w-full h-full transition-opacity duration-300 ${
						index === currentImage
							? "opacity-100"
							: "opacity-0 pointer-events-none"
					}`}>
					<img
						src={image.src}
						alt={image.alt}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
						{image.description}
					</div>
				</div>
			))}
			<button
				onClick={prevImage}
				className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-l">
				<i>
					<BsFillArrowLeftCircleFill />
				</i>
			</button>
			<button
				onClick={nextImage}
				className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-r">
				<i>
					<BsFillArrowRightCircleFill />
				</i>
			</button>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<div
						key={index}
						className={`h-2 w-2 rounded-full ${
							index === currentImage ? "bg-white" : "bg-gray-300"
						}`}></div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
