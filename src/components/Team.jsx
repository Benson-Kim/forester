import React from "react";

const Team = () => {
	return (
		<section
			id="team"
			className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				Team
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				Meet the Guardians of the Wilderness: Our Passionate and Expert Team
				<br /> Dedicated to Preserving Nature's Majesty
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 ">
				<div className="bg-secondary-white md:h-auto  my-10 ">
					<img
						src="./assets/images/team1.jpg"
						alt=""
						className="filter grayscale md:h-full mx-auto max-w-xs md:max-w-md pl-10 "
					/>
				</div>
				<div className="bg-secondary-white md:h-auto  my-10">
					<img
						src="./assets/images/team2.jpg"
						alt=""
						className="filter grayscale md:h-full mx-auto max-w-xs md:max-w-md pr-10 "
					/>
				</div>
			</div>
		</section>
	);
};

export default Team;
