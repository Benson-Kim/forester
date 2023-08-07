import React from "react";

const Services = () => {
	return (
		<section className="py-10 mt-20 bg-secondary-white relative">
			<h3 className="flex items-center justify-center capitalize text-4xl font-semibold text-primary-black mb-12">
				Services
			</h3>
			<div className="flex items-center justify-between mx-16 gap-8">
				<div className=" w-full sm:w-1/2 md:w-1/3 rounded-sm text-secondary-white border border-secondary-black border-opacity-25 hover:border-opacity-50 bg-primary-green flex flex-col">
					<img src="/assets/images/image1.jpg" alt="" className="h-44" />
					<div className="flex items-center justify-center flex-col px-6 text-secondary-white">
						<h5 className="font-semibold text-lg my-4 ">Sow Seeds of Change</h5>
						<p className=" mb-2 whitespace-break-spaces text-center ">
							Crafting visually stunning designs that will leave you speechless
						</p>
					</div>
					<button className="rounded-3xl uppercase text-sm font-light px-3 py-2 mb-4 hover:translate-x-1 transition ease-in duration-300 cursor-pointer ">
						Read more
					</button>
				</div>
				<div className=" w-full sm:w-1/2 md:w-1/3 rounded-sm text-secondary-white border border-secondary-black border-opacity-25 hover:border-opacity-50 bg-primary-green flex flex-col">
					<img src="/assets/images/image1.jpg" alt="" className="h-44" />
					<div className="flex items-center justify-center flex-col px-6 ">
						<h5 className="font-semibold text-lg my-4 ">
							Nature's Second Chance
						</h5>
						<p className=" mb-2 whitespace-break-spaces text-center ">
							Crafting visually stunning designs that will leave you speechless
						</p>
					</div>
					<button className="rounded-3xl uppercase text-sm font-light  px-3 py-2 mb-4 hover:translate-x-1 transition ease-in duration-300 cursor-pointer ">
						Read more
					</button>
				</div>
				<div className=" w-full sm:w-1/2 md:w-1/3 rounded-sm border text-secondary-white border-secondary-black border-opacity-25 hover:border-opacity-50 bg-primary-green flex flex-col">
					<img src="/assets/images/image1.jpg" alt="" className="h-44" />
					<div className="flex items-center justify-center flex-col px-6 ">
						<h5 className="font-semibold text-lg my-4 ">
							EcoRevive: Reforesting Our Home
						</h5>
						<p className="mb-2 whitespace-break-spaces text-center ">
							Crafting visually stunning designs that will leave you speechless
						</p>
					</div>
					<button className="rounded-3xl uppercase text-sm font-light  px-3 py-2 mb-4 hover:translate-x-1 transition ease-in duration-300 cursor-pointer ">
						Read more
					</button>
				</div>
			</div>
		</section>
	);
};

export default Services;
