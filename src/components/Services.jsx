import React from "react";

const servicesContent = [
	{
		id: 1,
		title: "Sustainable Forest Management",
		description:
			"We specialize in sustainable forest management practices that balance environmental conservation with responsible timber harvesting. Our certified professionals work closely with landowners to develop tailored management plans that optimize forest health and ecosystem diversity.",
		image: "assets/images/image1.jpg",
	},
	{
		id: 2,
		title: "Reforestation and Habitat Restoration",
		description:
			"With a deep understanding of local ecosystems, we are proud to be leaders in reforestation and habitat restoration projects. Our efforts contribute to revitalizing natural habitats and supporting the diverse wildlife that depends on them.",
		image: "assets/images/image1.jpg",
	},
	{
		id: 3,
		title: "Educational Workshops and Tours",
		description:
			"We believe in fostering a connection between people and forests. Join us for our educational workshops and guided tours, where you'll learn about the intricate web of life in the forest and gain insights into the importance of sustainable forestry.",
		image: "assets/images/image1.jpg",
	},
	{
		id: 4,
		title: "Donate Seedlings",
		description:
			"Contribute to the growth of our beautiful forest by donating seedlings. Your support helps us plant and nurture a variety of tree species, fostering a diverse and vibrant ecosystem.",
		image: "assets/images/image1.jpg",
	},
	// Add more service items here if needed
];

const Services = () => {
	return (
		<section
			id="services"
			className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				Services
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				From Reforestation Initiatives to Holistic Habitat Restoration:
				Enriching the Natural World Through <br /> Our Dedicated Forest
				Management Services
			</p>
			<ul class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-6 m-10 md:m-28">
				{servicesContent.map((service) => (
					<li
						key={service.id}
						className="w-full mx-4 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col bg-tertiary-black hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
						<img
							src={service.image}
							alt={service.title}
							className="h-44 w-full object-fill"
						/>
						<div className="px-4 py-2 text-center">
							<h4 className="my-2 text-lg font-semibold text-secondary-white">
								{service.title}
							</h4>
							<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-secondary-white">
								{service.description}
							</p>
						</div>
						{/* <button className="inline-flex items-center bg-secondary-white border-0 py-1.5 px-5 text-secondary-black rounded-full hover:bg-secondary-black hover:text-customLight transition-all ease-in duration-300">
							Read More
						</button> */}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Services;
