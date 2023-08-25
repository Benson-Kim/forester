import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section
			id="home"
			className="bg-hero bg-no-repeat bg-cover bg-center py-20 h-full ">
			<div className="gradient-bg opacity-90 absolute h-full w-full right-0 bottom-0 left-0 top-0" />
			<div className="w-full h-full table">
				<div className="align-middle table-cell">
					<div className="w-full mx-auto px-3">
						<div className=" text-secondary-white flex items-center justify-center flex-col relative">
							<h1 className="text-4xl leading-[64px] max-w-xl text-center ">
								Explore the Beauty of Nature with Us
							</h1>
							<p className="pt-3 text-center max-w-xl leading-7 text-secondary-white mx-auto ">
								At Forester, we are passionate about preserving and celebrating
								the wonders of the forest. Our team of dedicated experts is
								committed to sustainable forestry practices, ensuring that the
								beauty of nature thrives for generations to come.
							</p>
							<p className="my-6 mx-auto">
								<Link
									to=""
									className="inline-flex items-center bg-secondary-white py-2 px-5 text-sm text-center leading-6 border border-customGreen tracking-[0.5px] text-secondary-black rounded-sm hover:-translate-y-1 transition ease-in duration-300">
									Read more
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="absolute bottom-0 left-0 right-0">
				<img
					src="/assets/images/waves.png"
					alt=""
					className="max-w-full align-middle"
				/>
			</div> */}
		</section>
	);
};

export default Home;
