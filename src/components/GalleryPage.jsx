import React, { useState } from "react";

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

const GalleryPage = () => {
	const [filter, setFilter] = useState("all");
	const uniqueCategories = [...new Set(images.map((image) => image.category))];

	const handleCategoryChange = (category) => {
		setFilter(category);
	};
	return (
		<section id="gallery" className="pt-6 md:pt-12  mb-10 md:mb-20 ">
			<div className="text-center relative w-[95.75%] md:w-[83.5%] mx-auto px-4 ">
				<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
					Gallery
				</h3>
				<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
				<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-10 ">
					Journey Through the Seasons, One Frame at a Time: Our Gallery Unveils
					the <br /> Spectrum of Forest Stories, from Dawn to Dusk
				</p>
				<div className="mt-12 mb-6 flex items-center justify-center">
					{["all", ...uniqueCategories].map((category) => (
						<button
							key={category}
							className={`px-3 py-1.5 capitalize ${
								category === filter
									? "underline decoration-customGreen underline-offset-4 text-lg text-customGreen"
									: "decoration-secondary-black underline-offset-4 font-light text-lg text-secondary-white"
							}`}
							onClick={() => handleCategoryChange(category)}>
							{category === "all" ? "All" : category}
						</button>
					))}
				</div>

				<ul className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-items-center -mx-3.5 md:gap-7">
					{images
						.filter((image) => filter === "all" || image.category === filter)
						.map((image, index) => (
							<li
								key={index}
								className="w-full mx-4 mb-7 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col bg-tertiary-black hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
								<div className="h-44 desktop:h-52 overflow-hidden relative group">
									<img
										src={image.src}
										alt={`${image.category}`}
										className="h-full w-full object-cover object-center"
									/>
									<div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-secondary-black opacity-0 group-hover:h-full group-hover:opacity-100 group-hover:text-secondary-white duration-500">
										This Is The Overlay
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>
		</section>
	);
};

export default GalleryPage;
