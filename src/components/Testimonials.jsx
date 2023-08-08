// import React, { useEffect, useState } from "react";

// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Testimonials = () => {
// 	const [currentSlide, setCurrentSlide] = useState(0);

// 	const prevSlide = () => {
// 		setCurrentSlide((prevSlide) =>
// 			prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1,
// 		);
// 	};

// 	const nextSlide = () => {
// 		setCurrentSlide((prevSlide) =>
// 			prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1,
// 		);
// 	};

// 	// Function to move to the next slide automatically
// 	const autoPlay = () => {
// 		nextSlide();
// 	};

// 	useEffect(() => {
// 		const interval = setInterval(autoPlay, 5000);

// 		return () => clearInterval(interval);
// 	}, [currentSlide]);

// 	const testimonialsData = [
// 		{
// 			id: 1,
// 			name: "John Doe",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// 			image: "https://example.com/john.jpg",
// 		},
// 		{
// 			id: 2,
// 			name: "Jane Smith",
// 			text: "Praesent in odio vel lorem facilisis eleifend quis sit amet tortor.",
// 			image: "https://example.com/jane.jpg",
// 		},
// 		// Add more testimonials as needed
// 	];

// 	return (
// 		// <section className=" w-full h-full flex items-center justify-center">
// 		<section className=" py-10 relative">
// 			<div className="w-1/2 h-96 border rounded overflow-hidden">
// 				{/* <div className="absolute w-full h-full transition-transform duration-300 transform"> */}
// 				<div>
// 					{testimonialsData.map((testimonial, index) => (
// 						<div
// 							key={testimonial.id}
// 							className={`absolute top-0 left-0 w-full h-full ${
// 								index === currentSlide ? "" : "-translate-x-full"
// 							}`}>
// 							<div className="h-full flex px-16 w-full gap-x-10">
// 								<img
// 									src={testimonial.image}
// 									alt={testimonial.name}
// 									className="w-1/3 h-full object-cover"
// 								/>
// 								<div className="p-4 bg-gray-200 h-full flex flex-col justify-center w-2/3">
// 									<p className="text-gray-700">{testimonial.text}</p>
// 									<p className="mt-2 text-gray-500">- {testimonial.name}</p>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 			<button
// 				onClick={prevSlide}
// 				className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 ml-4">
// 				<FaChevronLeft />
// 			</button>
// 			<button
// 				onClick={nextSlide}
// 				className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 ml-4">
// 				<FaChevronRight />
// 			</button>
// 		</section>
// 	);
// };

// export default Testimonials;

import React from "react";

const Testimonials = () => {
	return (
		<section className="py-10 mt-10 bg-secondary-white relative">
			<h3 className="flex items-center justify-center capitalize text-4xl font-semibold text-primary-black mb-12">
				Testimonials
			</h3>
		</section>
	);
};

export default Testimonials;
