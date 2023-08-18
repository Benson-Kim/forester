import React from "react";

const Quotes = () => {
	return (
		<section
			id="quotes"
			className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				Quotes
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				Where Nature Speaks Through Words: Inspiring Quotes to Embrace
				<br /> the Beauty of the Wild
			</p>
		</section>
	);
};

export default Quotes;
