import React from "react";

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
		</section>
	);
};

export default Blogs;
