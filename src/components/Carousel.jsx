// TestimonialsSlider.js
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
	{
		id: 1,
		name: "John Doe",
		testimony:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure aut repellendus quas officia vitae expedita veniam quibusdam rerum molestiae! Reprehenderit voluptas ab sapiente reiciendis cumque incidunt officiis earum dignissimos nesciunt dolores vel at provident pariatur laboriosam asperiores deserunt rem alias autem labore veritatis velit praesentium nulla, facere doloribus. Sint odio officia aspernatur dicta vitae harum assumenda, ratione consectetur quisquam inventore dolorem in ipsum et eligendi, modi possimus perferendis velit. Fuga, earum facilis delectus ad quia dignissimos magnam illo non enim perferendis quas, eaque harum. Pariatur, dicta.",
		date: "August 15, 2023",
		image:
			"https://www.istockphoto.com/photo/spruce-tree-nursery-for-reforestation-gm1363121429-434810143?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FReforestation&utm_term=Reforestation%3A%3A%3A",
	},
	{
		id: 2,
		name: "Jane Smith",
		testimony:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eius, reiciendis est eum adipisci, suscipit sequi cumque inventore, cum repellendus qui? Quod, laborum! Dolores eum placeat similique, molestiae amet deserunt. Voluptatibus odio at, doloribus optio, consequuntur facilis suscipit labore, maiores ipsa aspernatur dolore nesciunt itaque? Id et debitis quibusdam accusamus in ullam, numquam porro, illum repellat assumenda minima mollitia sit nam expedita corrupti saepe iste! Labore enim rerum fuga accusantium velit repudiandae totam sequi accusamus quas eligendi dolor blanditiis voluptas nostrum officiis dolores repellendus, libero veniam beatae dolorum numquam temporibus! Ducimus?",
		date: "September 5, 2023",
		image:
			"https://images.unsplash.com/photo-1571035089306-e40c9289fe78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVmb3Jlc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
	},
	// Add more testimonials as needed
];

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1,
		);
	};

	const nextSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1,
		);
	};

	// Function to move to the next slide automatically
	const autoPlay = () => {
		nextSlide();
	};

	useEffect(() => {
		// Auto move to the next slide every 5 seconds (adjust the interval as needed)
		const interval = setInterval(autoPlay, 5000);

		// Clear the interval when the component unmounts to avoid memory leaks
		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<section className="py-10 bg-primary-green bg-opacity-70 overflow-hidden relative">
			<div
				className="relative  border rounded-lg overflow-hidden shadow-md"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}>
				<div className=" transition-transform duration-300 transform">
					{testimonialsData.map((testimonial, index) => (
						<div
							key={testimonial.id}
							className={`flex transition-transform ease-out duration-500  ${
								index === currentSlide
									? `translateX(-${currentSlide * 100}%)`
									: "-translate-x-full"
							}`}>
							<div className="h-full flex">
								<div className="w-1/2 h-full">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-full h-full object-cover"
										width="100"
										height="100"
									/>
								</div>
								<div className="p-4 bg-gray-200 h-full flex flex-col justify-center w-1/2">
									<p className="text-gray-700">{testimonial.testimony}</p>
									<div className="flex justify-between items-center mt-2">
										<p className="text-gray-500">- {testimonial.name}</p>
										<p className="text-gray-500">{testimonial.date}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{isHovering && (
					<>
						<button
							onClick={prevSlide}
							className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 ml-4 absolute top-1/2 left-0 transform -translate-y-1/2">
							<FaChevronLeft />
						</button>
						<button
							onClick={nextSlide}
							className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 ml-4 absolute top-1/2 right-0 transform -translate-y-1/2">
							<FaChevronRight />
						</button>
					</>
				)}
			</div>
		</section>
	);
};

export default Carousel;
