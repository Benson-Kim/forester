import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";
// import { format } from "date-fns";

const Blogs = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		client
			.fetch(
				`*[_type == "post"] {
				title,
				slug,
				category,
				body,
				publishedAt,
				mainImage {
				asset -> { _id, url},alt,
		}
  } | order(publishedAt desc)`,
			)
			.then((data) => setPosts(data))
			.catch(console.error);
	}, []);

	console.log(posts);

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
				<div className="grid grid-cols-1 justify-items-center -mx-15 md:grid-cols-3 md:gap-7">
					{posts.map((blog) => (
						<Link
							to={`/blog/${blog.slug.current}`}
							target="_self"
							key={blog.slug.current}
							className="relative w-full mb-7 md:mx-8 2xl:mx-12 shadow-sm flex flex-col rounded-md bg-tertiary-black group cursor-pointer">
							<div className="h-40 desktop:h-52 overflow-hidden relative ">
								<img
									src={blog.mainImage.asset.url}
									alt={blog.title}
									className="h-full w-full object-cover object-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition ease-out duration-300"
								/>
							</div>
							<div className="p-6">
								<h3 className="inline-block mb-4 text-secondary-white font-normal leading-7 tracking-wide capitalize hover:text-primary-white">
									{blog.title}
								</h3>
							</div>
							<p className="absolute top-0 left-0 bg-secondary-white text-center text-secondary-black px-3 py-1.5 uppercase font-light  ">
								{blog.category}
							</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blogs;
