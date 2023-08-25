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
			<div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-16 mt-36">
				<div className="bg-tertiary-black h-1/2 md:h-auto mx-5 md:mx-20 ">
					<img
						src="./assets/images/team1.png"
						alt=""
						className="h-1/2 md:h-full"
					/>
				</div>
				<div className="">
					<img src="./assets/images/team1.png" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Team;
