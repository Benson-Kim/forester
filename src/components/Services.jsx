import React from "react";

const Services = () => {
	return (
		<section className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto bg-primary-white relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-primary-black mb-0 pb-4">
				Services
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-2.5 md:mt-5 bg-primary-green" />
			<p className="text-[#95a0ab] tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				We craft digital, graphic and dimensional thinking, to create category
				leading brand experiences that <br /> have meaning and add a value for
				our clients.
			</p>
			<ul class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 m-10 md:m-28">
				<li className="w-full mx-4 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
					<img
						src="assets/images/image1.jpg"
						alt=""
						className="h-44 w-full object-fill"
					/>
					<div className="px-4 py-2 text-center">
						<h4 className="my-2 text-lg font-semibold">Digital Services</h4>
						<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-slate-500">
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Moltin gives you the platform.
						</p>
					</div>
				</li>
				<li className="w-full mx-4 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
					<img
						src="assets/images/image1.jpg"
						alt=""
						className="h-44 w-full object-fill"
					/>
					<div className="px-4 py-2 text-center">
						<h4 className="my-2 text-lg font-semibold">Digital Services</h4>
						<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-slate-500">
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Moltin gives you the platform.
						</p>
					</div>
				</li>
				<li className="w-full mx-4 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
					<img
						src="assets/images/image1.jpg"
						alt=""
						className="h-44 w-full object-fill"
					/>
					<div className="px-4 py-2 text-center">
						<h4 className="my-2 text-lg font-semibold">Digital Services</h4>
						<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-slate-500">
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Moltin gives you the platform.
						</p>
					</div>
				</li>
				<li className="w-full mx-4 lg:mx-8 2xl:mx-12 shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
					<img
						src="assets/images/image1.jpg"
						alt=""
						className="h-44 w-full object-fill"
					/>
					<div className="px-4 py-2 text-center">
						<h4 className="my-2 text-lg font-semibold">Digital Services</h4>
						<p className="text-center mt-1 5 py-1 5 text-sm mb-4 leading-6 tracking-wide text-slate-500">
							Some quick example text to build on the card title and make up the
							bulk of the card's content. Moltin gives you the platform.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default Services;
