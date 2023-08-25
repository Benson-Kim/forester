import React from "react";

import {
	RiFacebookFill,
	RiInstagramLine,
	RiMailAddFill,
	RiPhoneFill,
	RiTwitterFill,
	RiLinkedinBoxFill,
	RiMailSendFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<section id="contact" className="pt-6 md:pt-12 bg-tertiary-black ">
			<div className="max-w-screen-tablet  laptop:max-w-[960px] desktop:max-w-[1140px] w-full px-4 mx-auto block">
				<div className="py-10 flex flex-wrap -mx-4">
					<div className="tablet:max-w-[50%] flex-1 w-2/3 px-4 block">
						<h4 className="text-primary-white text-2xl leading-6 font-medium mb-4 mt-0 block">
							Leave your message
						</h4>

						<div className="">
							<form
								action=""
								className="m-0 p-0 block font-light leading-6 text-xl">
								<fieldset className="min-w-0 p-0 m-0 border-none block">
									<div className="flex w-full mb-5 flex-col tablet:flex-row gap-4 transition-all ease-in-out duration-500">
										<input
											type="text"
											name=""
											id=""
											placeholder="Name"
											className="font-light w-full text-lg rounded px-5 py-2.5 "
										/>
										<input
											type="tel"
											name=""
											id=""
											placeholder="Phone Number"
											className="font-light w-full text-lg rounded px-5 py-2.5 "
										/>
									</div>
									<div className="flex w-full mb-5 flex-col tablet:flex-row gap-4 transition-all ease-in-out duration-500">
										<input
											type="email"
											name=""
											id=""
											placeholder="Email Address"
											className="font-light w-full text-lg rounded px-5 py-2.5 "
										/>
									</div>
									<div className="flex w-full mb-5 flex-col tablet:flex-row gap-4 transition-all ease-in-out duration-500">
										<textarea
											name=""
											id=""
											placeholder="Message"
											className="font-light w-full text-lg rounded px-5 py-2.5 "
										/>
									</div>
									<button
										type="submit"
										className="uppercase text-sm leading-7 tracking-wide flex items-center gap-2 font-semibold bg-primary-white text-primary-green rounded-md px-5 py-2.5 bg-opacity-90 hover:bg-opacity-100 hover:scale-x-105 transition-all ease-in-out duration-500 ">
										<i>
											<RiMailSendFill />
										</i>
										send message
									</button>
								</fieldset>
							</form>
						</div>
						{/* form ends */}
						<p className="text-primary-white mt-5 font-light text-sm tablet:text-base laptop:text-xl leading-6 laptop:leading-8 ">
							* We don't share your personal info. <br /> Check out our{" "}
							<Link to="" className="text-customGreen">
								Privacy Policy
							</Link>{" "}
							for more information.{" "}
						</p>
					</div>
					<div className="tablet:max-w-[50%] flex-1 w-full px-4 block mt-8 tablet:mt-0">
						<h4 className="text-primary-white text-2xl leading-6 font-medium mb-4 mt-0 block">
							Contact Info
						</h4>
						<div className="">
							<div className="flex w-full mb-5 flex-col tablet:flex-row gap-4 transition-all ease-in-out duration-500">
								<p className="font-light w-full text-lg  text-secondary-white ">
									Heartness Charity Organisation <br />
									1234 Lorem ipsum, Dolor sit,
									<br />
									City name - 43680.
								</p>
								<div className="flex flex-col gap-4">
									<a
										href="mailto:sayhello@example.com"
										className="leading-7 tracking-wide font-light  flex items-center text-secondary-white text-lg ">
										<i className="text-3xl mr-2">
											<RiMailAddFill className="" />
										</i>
										sayhello@example.com
									</a>
									<a
										href="tel:+1800229933"
										className="leading-7 tracking-wide font-light flex items-center text-secondary-white text-lg ">
										<i className="text-3xl mr-2">
											<RiPhoneFill />
										</i>
										+254700000000
									</a>
								</div>
							</div>
						</div>
						<ul className="flex w-full justify-between items-center">
							<li className="flex items-center gap-2 text-xl justify-center p-2 transition duration-500 ease-in-out bg-secondary-white bg-opacity-90 text-primary-black rounded-md cursor-pointer hover:translate-x-1">
								<i>
									<RiFacebookFill className=" " />
								</i>
								<p className="hidden md:block text-lg">Facebook</p>
							</li>
							<li className="flex items-center gap-2 text-xl justify-center p-2 transition duration-500 ease-in-out bg-secondary-white bg-opacity-90 text-primary-black rounded-md cursor-pointer hover:translate-x-1">
								<i>
									<RiInstagramLine className=" " />
								</i>
								<p className="hidden md:block text-lg">Instagram</p>
							</li>

							<li className="flex items-center gap-2 text-xl justify-center p-2 transition duration-500 ease-in-out bg-secondary-white bg-opacity-90 text-primary-black rounded-md md:rounded-full cursor-pointer hover:translate-x-1">
								<i>
									<RiTwitterFill className=" " />
								</i>
								<p className="hidden md:block text-lg">Twitter</p>
							</li>

							<li className="flex items-center gap-2 text-xl justify-center p-2 transition duration-500 ease-in-out bg-secondary-white bg-opacity-90 text-primary-black rounded-md cursor-pointer hover:translate-x-1">
								<i>
									<RiLinkedinBoxFill className=" " />
								</i>
								<p className="hidden md:block text-lg">LinkedIn</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="hidden md:block w-full h-[1px] border border-secodary-green border-dashed" />
		</section>
	);
};

export default Contact;
