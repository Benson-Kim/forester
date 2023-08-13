import React, { useState, useEffect } from "react";

import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const feedback = [
	{
		id: "feedback-1",
		content:
			"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
		name: "Herman Jensen",
		title: "Founder & Leader",
		img: "https://i.imgur.com/Dn0qoCG.png",
	},
	{
		id: "feedback-2",
		content:
			"Money makes your life easier. If you're lucky to have it, you're lucky.",
		name: "Steve Mark",
		title: "Founder & Leader",
		img: "https://i.imgur.com/fk8eEvW.png",
	},
	{
		id: "feedback-3",
		content:
			"It is usually people in the money business, finance, and international trade that are really rich.",
		name: "Kenn Gallagher",
		title: "Founder & Leader",
		img: "https://i.imgur.com/dLxxRDy.png",
	},
];

const Testimonials = () => {
	return (
		<section className="pt-6 md:pt-12 pb-10 md:pb-20  mx-auto bg-customLight relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-primary-black mb-0 pb-4">
				Testimonials
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-2.5 md:mt-5 bg-primary-green" />
			<p className="text-[#95a0ab] tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				Every Review, a Testimonial of Connection: Join Our Community in
				Celebrating the <br /> Positive Ripples of Our Forest Engagement
			</p>
			{/* <div className="flex justify-center items-center flex-col relative bg-primary-green">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="">
					{feedback.map((card) => (
						<SwiperSlide>
							<FeedbackCard key={card.id} {...card} />
						</SwiperSlide>
					))}
				</Swiper>
			</div> */}
		</section>
	);
};

export default Testimonials;

const FeedbackCard = ({ content, name, title, img }) => (
	<div className="flex justify-between flex-col  px-10 py-12 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card">
		<p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
			{content}
		</p>

		<div className="flex flex-row">
			<img src={img} alt={name} className=" rounded-full" />
			<div className="flex flex-col ml-4">
				<h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
					{name}
				</h4>
				<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
					{title}
				</p>
			</div>
		</div>
	</div>
);
