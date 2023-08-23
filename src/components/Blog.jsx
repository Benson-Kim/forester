import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
	{
		slug: "exploring-the-woods",
		title: "Exploring the Enchanting Woods",
		date: "August 15, 2023",
		excerpt:
			"Discover the magic of our forest trails. Join us as we explore the breathtaking beauty and serenity of nature's wonders.",
	},
	{
		slug: "sustainable-forestry-practices",
		title: "Sustainable Forestry Practices",
		date: "September 5, 2023",
		content: `
            Discover the importance of sustainable forestry practices in preserving our natural resources.
            Learn about reforestation, responsible harvesting, and community engagement.
            // ... (rest of the content)
        `,
	},
	{
		slug: "forests-and-biodiversity",
		title: "Forests and Biodiversity",
		date: "October 20, 2023",
		content: `
            Explore the intricate connection between forests and biodiversity. Learn how forests support
            a diverse range of plant and animal species and contribute to a healthy ecosystem.
            // ... (rest of the content)
        `,
	},
	{
		slug: "restoring-degraded-forests",
		title: "Restoring Degraded Forests",
		date: "November 12, 2023",
		content: `
            Dive into the efforts to restore degraded forests around the world. Discover the challenges,
            techniques, and success stories of reestablishing healthy and thriving forests.
            // ... (rest of the content)
        `,
	},
	{
		slug: "forestry-in-climate-change",
		title: "Forestry's Role in Climate Change Mitigation",
		date: "December 8, 2023",
		content: `
            Learn how forests play a crucial role in mitigating climate change. Explore the carbon sequestration,
            adaptation, and resilience that forests offer in the face of a changing climate.
            // ... (rest of the content)
        `,
	},
];

const Blogs = () => {
	return (
		<section
			id="blog"
			className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				Blogs
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				Exploring Nature's Chronicles: Dive into Our Blogosphere, Where Stories{" "}
				<br /> of the Wild Await Your Discovery
			</p>

			<div className="flex flex-wrap m-8 md:m-20">
				<BlogCard
					date="Dec 22, 2023"
					CardTitle="Meet AutoManage, the best AI management tools"
					CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
				/>
				<BlogCard
					date="Dec 22, 2023"
					CardTitle="Meet AutoManage, the best AI management tools"
					CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					image="https://i.ibb.co/Y23YC07/image-02.jpg"
				/>
				<BlogCard
					date="Dec 22, 2023"
					CardTitle="Meet AutoManage, the best AI management tools"
					CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
					image="https://i.ibb.co/7jdcnwn/image-03.jpg"
				/>
			</div>
		</section>
	);
};

export default Blogs;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
	return (
		<>
			<div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
				<div className="mx-auto mb-10 max-w-[370px] bg-tertiary-black  ">
					<div className="mb-8 overflow-hidden rounded">
						<img src={image} alt="" className="w-full" />
					</div>
					<div className="p-6">
						<h3>
							<Link
								to=""
								// to={`/blog/${post.slug}`}
								target="_blank"
								className="inline-block mb-4 text-secondary-white hover:text-primary-white sm:text-base lg:text-lg xl:text-xl">
								{CardTitle}
							</Link>
						</h3>
						{date && (
							<p className="text-secondary-white text-sm mb-4">{date}</p>
						)}
						<p className="text-secondary-white">{CardDescription}</p>
					</div>
				</div>
			</div>
		</>
	);
};
