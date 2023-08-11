// src/components/ImageGrid.js
import React, { useState } from "react";

const ImageGrid = () => {
	const [filter, setFilter] = useState("all");

	// Sample image data with categories
	const images = [
		{ id: 1, src: "/assets/images/image1.jpg", category: "planting" },
		{ id: 2, src: "/assets/images/image2.jpg", category: "planting" },
		{ id: 3, src: "/assets/images/image3.jpg", category: "planting" },
		{ id: 4, src: "/assets/images/image4.jpg", category: "planting" },
		{ id: 5, src: "/assets/images/image5.jpg", category: "planting" },
		{ id: 6, src: "/assets/images/image6.jpg", category: "planting" },
		{ id: 7, src: "/assets/images/image7.jpg", category: "nursery" },
		{ id: 8, src: "/assets/images/image8.jpg", category: "nursery" },
		{
			id: 9,
			src: "/assets/images/image9 - deforestation.jpg",
			category: "deforestation",
		},
		{
			id: 10,
			src: "/assets/images/image10 - deforestation.jpg",
			category: "deforestation",
		},
		// Add more images with categories here
	];

	const uniqueCategories = [...new Set(images.map((image) => image.category))];

	const handleCategoryChange = (category) => {
		setFilter(category);
	};

	return (
		<section className="pb-20 mt-20 mx-auto pt-12 bg-customLight relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-primary-black mb-0 pb-4">
				Gallery
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-primary-green" />
			<div className="mt-12 mb-6 flex items-center justify-center ">
				<button
					className={`mr-4 px-3 py-1.5 ${
						filter === "all"
							? "underline capitalize decoration-primary-green underline-offset-4 font-semibold text-lg text-secondary-green"
							: " capitalize decoration-secondary-black underline-offset-4 font-semibold text-lg text-secondary-black"
					}`}
					onClick={() => handleCategoryChange("all")}>
					All
				</button>
				{uniqueCategories.map((category) => (
					<button
						key={category}
						className={`mr-4 ${
							filter === category
								? "underline capitalize decoration-primary-green underline-offset-4 font-semibold text-lg text-secondary-green"
								: " capitalize decoration-primary-green underline-offset-4 font-semibold text-lg text-secondary-black transition-all ease-in duration-500"
						}`}
						onClick={() => handleCategoryChange(category)}>
						{category}
					</button>
				))}
			</div>

			<div class="flex flex-col items-center gap-4 laptop:mx-8 flex-wrap laptop:flex-row ">
				{images
					.filter((image) => filter === "all" || image.category === filter)
					.map((image) => (
						<div class="group relative " key={image.id}>
							<img
								class="h-48 max-w-full rounded-sm "
								src={image.src}
								alt={`${image.category}`}
							/>
							<div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-secondary-black opacity-0 group-hover:h-full group-hover:opacity-100 group-hover:text-secondary-white duration-500">
								This Is The Overlay
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default ImageGrid;
