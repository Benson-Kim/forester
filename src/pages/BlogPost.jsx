import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
	const { slug } = useParams();

	// Assuming you have an array of blog posts
	const blogPosts = [
		{
			slug: "exploring-the-woods",
			title: "Exploring the Enchanting Woods",
			date: "August 15, 2023",
			content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies tristique nisi,
                eu dictum velit fringilla in. Nam lacinia volutpat efficitur.
                // ... (rest of the content)
            `,
		},
		// Add more blog post entries here
	];

	// Find the blog post that matches the extracted slug
	const selectedBlogPost = blogPosts.find((post) => post.slug === slug);

	if (!selectedBlogPost) {
		return <div>Blog post not found</div>;
	}

	return (
		<section className="py-12 bg-gray-100">
			<div className="container mx-auto">
				<article className="bg-white p-6 rounded shadow-md">
					<h2 className="text-2xl font-semibold mb-2">
						{selectedBlogPost.title}
					</h2>
					<p className="text-gray-600 text-sm mb-4">{selectedBlogPost.date}</p>
					<div
						className="prose prose-sm lg:prose-lg text-gray-800"
						dangerouslySetInnerHTML={{ __html: selectedBlogPost.content }}
					/>
				</article>
			</div>
		</section>
	);
};

export default BlogPost;
