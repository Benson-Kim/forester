import React from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
			<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
				<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Don't just take our word for it...
						<br className="hidden sm:block lg:hidden" />
						Read reviews from our customers
					</h2>

					<p className="mt-4 text-gray-500">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
						veritatis illo placeat harum porro optio fugit a culpa sunt id!
					</p>

					<div className="hidden lg:mt-8 lg:flex lg:gap-4">
						<button className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
							<span className="sr-only">Previous Slide</span>
							<i>
								<BsChevronLeft />
							</i>
						</button>

						<button className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
							<span className="sr-only">Next Slide</span>
							<i>
								<BsChevronRight />
							</i>
						</button>
					</div>
				</div>
				<div className="-mx-6 lg:col-span-2 lg:mx-0">
					<div className="swiper-container !overflow-hidden">
						<div className="swiper-wrapper">
							<Swiper
								spaceBetween={32}
								slidesPerView={1}
								centeredSlides={true}
								loop={true}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
								}}
								pagination={{
									clickable: true,
								}}
								navigation={{
									nextEl: ".next-button",
									prevEl: ".prev-button",
								}}
								breakpoints={{
									640: {
										centeredSlides: true,
										slidesPerView: 1.25,
									},
									1024: {
										centeredSlides: false,
										slidesPerView: 1.5,
									},
								}}
								modules={[Autoplay, Pagination, Navigation]}
								className="">
								{feedback.map((card) => (
									<SwiperSlide>
										<FeedbackCard key={card.id} {...card} />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

const FeedbackCard = ({ content, name, title, img }) => (
	<div className="swiper-slide">
		<blockquote className="flex h-full flex-col justify-between bg-white p-12">
			<div className="text-center">
				<img
					src={img}
					alt={name}
					className="h-16 w-16 rounded-full object-cover"
				/>

				<div className="mt-4">
					<p className="text-2xl font-bold text-pink-600 sm:text-3xl">
						{title}
					</p>

					<p className="mt-4 leading-relaxed text-gray-500">{content}</p>
				</div>
			</div>

			<footer className="mt-8 text-sm text-gray-500">&mdash; {name}</footer>
		</blockquote>
	</div>
);
