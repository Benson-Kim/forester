import React from "react";

const Hero = () => {
	return (
		<section className="py-10 mt-20 bg-secondary-white relative">
			<h3 className="flex items-center justify-center uppercase text-sm font-semibold text-primary-black mb-2">
				our story
			</h3>
			<div className="flex flex-col ">
				<p className="text-center leading-6 tracking-wide text-sm text-secondary-black">
					Unordinary digital agency crafting sophisticated and eccentric stuff
					that will leave <br /> you speechless, we had opportunity to work on
					wide variety of projects for different <br /> clients around the
					world, we're responsible and our client is our priority
				</p>
				<div className="flex items-center justify-center gap-5 mt-5 text-secondary-black font-light">
					<p> Interested in our story and want to meet us even better?</p>
					<button className="tracking-wider text-sm text-primary-black font-normal hover:underline transition ease-in duration-300">
						Read More
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
