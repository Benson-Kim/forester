import React from "react";

const Services = () => {
	return (
		<section
			id="services"
			className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto bg-customLight relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-primary-black mb-0 pb-4">
				Services
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-2.5 md:mt-5 bg-primary-green" />
			<p className="text-[#95a0ab] tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				From Reforestation Initiatives to Holistic Habitat Restoration:
				Enriching the Natural World Through <br /> Our Dedicated Forest
				Management Services
			</p>
			<ul class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 m-10 md:m-28">
				<li className="w-full  mx-4 lg:mx-8 2xl:mx-12  shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
					<img
						src="assets/images/image1.jpg"
						alt=""
						className="h-44 w-full object-fill"
					/>
					<div className="px-4 py-2 text-center">
						<h4 className="my-2 text-lg font-semibold text-primary-black">
							Sustainable Forest Management
						</h4>
						<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-secondary-black">
							We specialize in sustainable forest management practices that
							balance environmental conservation with responsible timber
							harvesting. Our certified professionals work closely with
							landowners to develop tailored management plans that optimize
							forest health and ecosystem diversity.
						</p>
					</div>
				</li>
				<li className="w-full  mx-4 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
					<img
						src="assets/images/image1.jpg"
						alt=""
						className="h-44 w-full object-fill"
					/>
					<div className="px-4 py-2 text-center">
						<h4 className="my-2 text-lg font-semibold text-primary-black">
							Reforestation and Habitat Restoration
						</h4>
						<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-secondary-black">
							With a deep understanding of local ecosystems, we are proud to be
							leaders in reforestation and habitat restoration projects. Our
							efforts contribute to revitalizing natural habitats and supporting
							the diverse wildlife that depends on them.
						</p>
					</div>
				</li>
				<li className="w-full  mx-4 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
					<img
						src="assets/images/image1.jpg"
						alt=""
						className="h-44 w-full object-fill"
					/>
					<div className="px-4 py-2 text-center">
						<h4 className="my-2 text-lg font-semibold text-primary-black">
							Educational Workshops and Tours
						</h4>
						<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-secondary-black">
							We believe in fostering a connection between people and forests.
							Join us for our educational workshops and guided tours, where
							you'll learn about the intricate web of life in the forest and
							gain insights into the importance of sustainable forestry.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Services;
