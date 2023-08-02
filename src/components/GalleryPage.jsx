// src/components/ImageGrid.js
import React, { useState } from "react";

const ImageGrid = () => {
	const [filter, setFilter] = useState("all");

	// Sample image data with categories
	const images = [
		{ id: 1, src: "/assets/image1.jpg", category: "planting" },
		{ id: 2, src: "/assets/image2.jpg", category: "planting" },
		{ id: 3, src: "/assets/image3.jpg", category: "planting" },
		{ id: 4, src: "/assets/image4.jpg", category: "planting" },
		{ id: 5, src: "/assets/image5.jpg", category: "planting" },
		{ id: 6, src: "/assets/image6.jpg", category: "planting" },
		{ id: 7, src: "/assets/image7.jpg", category: "nursery" },
		{ id: 8, src: "/assets/image8.jpg", category: "nursery" },
		{
			id: 9,
			src: "/assets/image9 - deforestation.jpg",
			category: "deforestation",
		},
		{
			id: 10,
			src: "/assets/image10 - deforestation.jpg",
			category: "deforestation",
		},
		// Add more images with categories here
	];

	const uniqueCategories = [...new Set(images.map((image) => image.category))];

	const handleCategoryChange = (category) => {
		setFilter(category);
	};

	return (
		<div className="container mx-auto my-5 py-10">
			<div className="mb-5">
				<button
					className={`mr-2 ${filter === "all" ? "bg-blue-500" : "bg-gray-300"}`}
					onClick={() => handleCategoryChange("all")}>
					All
				</button>
				{uniqueCategories.map((category) => (
					<button
						key={category}
						className={`mr-2 ${
							filter === category ? "bg-blue-500" : "bg-gray-300"
						}`}
						onClick={() => handleCategoryChange(category)}>
						{category}
					</button>
				))}
			</div>
			<div className="grid grid-cols-2 gap-4">
				{images
					.filter((image) => filter === "all" || image.category === filter)
					.map((image) => (
						<div key={image.id}>
							<img
								src={image.src}
								alt={`Image ${image.id}`}
								className="rounded-lg"
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default ImageGrid;
