import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className="bg-hero bg-no-repeat bg-cover bg-center py-20 h-full ">
			<div className="gradient-bg bg-gradient-to-r from-customLime to-customGreen opacity-90 absolute h-full w-full right-0 bottom-0 left-0 top-0"></div>
			<div className="w-full h-full table">
				<div className="align-middle table-cell">
					<div className="sm:max-w-screen-tablet w-full mx-auto px-3">
						<div className="flex flex-wrap">
							<div className="text-white flex items-center text-center flex-col relative">
								<h1 className="text-xl leading-9 font-serif  ">
									We help startups launch their products
								</h1>
								<p className="pt-3 max-w-xs text-primary-white text-sm my-0 mx-auto">
									Unordinary digital agency crafting sophisticated and eccentric
									stuff that will leave you speechless, we had opportunity to
									work on wide variety of projects for different clients around
									the world, we're responsible and our client is our priority
								</p>
								<p className="border border-secondary-black w-24 h-24 my-20px mx-auto rounded-full mt-4 leading-9 text-sm">
									<Link
										to=""
										className="border-primary-green border-2 px-2 rounded-full w-8 h-8 block text-lg mx-auto mt-3.5 text-center leading-8 outline-none ">
										Read more
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0">
				<img
					src="/assets/images/waves.png"
					alt=""
					className="max-w-full align-middle"
				/>
			</div>
		</section>
	);
};

export default Home;
