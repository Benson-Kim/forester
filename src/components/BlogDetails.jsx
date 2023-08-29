import { useState, useEffect } from "react";
import client from "../client";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
// import { format } from "date-fns";

const BlogDetails = () => {
	const [blogPost, setBlogPost] = useState([]);
	const { slug } = useParams();
	useEffect(() => {
		client
			.fetch(
				`*[slug.current == "${slug}"] {
					title,
					slug,
					body,
					publishedAt,
					mainImage {
						asset -> {_id,url},alt,},
					"name": author->name,
					}`,
			)
			.then((data) => setBlogPost(data[0]))
			.catch(console.error);
	}, [slug]);

	return (
		<section
			id="services"
			className="pt-6 md:pt-12  mb-10 md:mb-20 bg-primary-white">
			<div className="text-center relative w-[90.75%] md:w-[75.5%] mx-auto px-4 ">
				<h3 className="flex items-center justify-center uppercase text-3xl leading-10 tracking-[2px] font-semibold text-tertiary-black mb-0 pb-4">
					{blogPost.title}
				</h3>
				{blogPost.mainImage && blogPost.mainImage.asset && (
					<div className="h-40 desktop:h-52 w-full overflow-hidden relative ">
						<img
							src={blogPost.mainImage.asset.url}
							alt={blogPost.title}
							className="h-full w-full object-cover object-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition ease-out duration-300"
						/>
					</div>
				)}
				<BlockContent
					blocks={blogPost.body}
					projectId="mv1l42cz"
					dataset="production"
					className="text-secondary-black tracking-wide text-center pt-6 leading-6 text-sm mb-8 "
				/>
			</div>
		</section>
	);
};

export default BlogDetails;
