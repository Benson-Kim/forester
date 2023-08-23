import React from "react";

const Blog = () => {
	return (
		<>
			<section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
				<div className="flex flex-wrap mx-4">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
							<span className="block mb-2 text-lg font-semibold text-primary">
								Our Blogs
							</span>
							<h2 className="mb-4 text-3xl font-bold text-customGreen sm:text-4xl md:text-[40px]">
								Our Recent News
							</h2>
							<p className="text-base text-secondary-white">
								There are many variations of passages of Lorem Ipsum available
								but the majority have suffered alteration in some form.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap mx-4">
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
		</>
	);
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
	return (
		<>
			<div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
				<div className="mx-auto mb-10 max-w-[370px] bg-tertiary-black  ">
					<div className="mb-8 overflow-hidden rounded">
						<img src={image} alt="" className="w-full" />
					</div>
					<div className="text-center m-3 p-3">
						{date && (
							<span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-secondary-black">
								{date}
							</span>
						)}
						<h3>
							<a
								href="/#"
								className="inline-block mb-4 text-secondary-white hover:text-primary-white sm:text-base lg:text-lg xl:text-xl">
								{CardTitle}
							</a>
						</h3>
						<p className="text-base text-secondary-white">{CardDescription}</p>
					</div>
				</div>
			</div>
		</>
	);
};
