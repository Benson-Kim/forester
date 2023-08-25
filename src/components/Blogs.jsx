import React from "react";
import { Link } from "react-router-dom";

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

const BlogListing = () => {
	return (
		<section id="blog" className="pt-6 md:pt-12  mb-10 md:mb-20 ">
			<div className="text-center relative w-[95.75%] md:w-[83.5%] mx-auto px-4 ">
				<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
					Blogs
				</h3>
				<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
				<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
					Exploring Nature's Chronicles: Dive into Our Blogosphere, Where
					Stories <br /> of the Wild Await Your Discovery
				</p>
				<ul className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-items-center -mx-3.5 md:gap-7">
					{servicesContent.map((card, idx) => (
						<BlogCard key={idx} {...card} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default BlogListing;

const BlogCard = ({ description, title, image, date }) => (
	<li className="w-full mx-4 mb-7 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col bg-tertiary-black hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
		<div className="h-44 desktop:h-52 overflow-hidden relative ">
			<img
				src={image}
				alt={title}
				className="h-full w-full object-cover object-center"
			/>
		</div>

		<Link to="" target="_blank" className="p-6">
			<h3 className="inline-block mb-4 text-secondary-white hover:text-primary-white sm:text-base lg:text-lg xl:text-xl">
				{title}
			</h3>
			{date && <p className="text-secondary-white text-sm mb-4">{date}</p>}
			<p className="text-secondary-white">{description}</p>
		</Link>
	</li>
);
