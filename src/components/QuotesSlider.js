import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Parallax } from "swiper/modules";

const fallbackQuotes = [
	{
		id: 1,
		author: "Wangari Maathai",
		text: "You cannot protect the environment unless you empower people, you inform them, and you help them understand that these resources are their own, that they must protect them.",
	},
	{
		id: 2,
		author: "Wangari Maathai",
		text: "When we plant trees, we plant the seeds of peace and seeds of hope.",
	},
	{
		id: 3,
		author: "Wangari Maathai",
		text: "In the course of history, there comes a time when humanity is called to shift to a new level of consciousness, to reach a higher moral ground. A time when we have to shed our fear and give hope to each other. That time is now.",
	},
	{
		id: 4,
		author: "Wangari Maathai",
		text: "You can make a lot of speeches, but the real thing is when you dig a hole, plant a tree, give it water, and make it survive. That's what makes the difference.",
	},
	{
		id: 5,
		author: "Wangari Maathai",
		text: "You cannot enslave a mind that knows itself. That values itself. That understands itself.",
	},
	{
		id: 6,
		author: "Wangari Maathai",
		text: "No matter who or where we are, or what our capabilities, we are called to do the best we can.",
	},
	{
		id: 7,
		author: "Wangari Maathai",
		text: "Every one of us can make a contribution. And quite often we are looking for the big things and forget that, wherever we are, we can make a contribution. Sometimes I tell myself, I may only be planting a tree here, but just imagine what's happening if there are billions of people out there doing something. Just imagine the power of what we can do.",
	},
	{
		id: 8,
		author: "Wangari Maathai",
		text: "Recognizing that sustainable development, democracy and peace are indivisible is an idea whose time has come... Today we are faced with a challenge that calls for a shift in our thinking, so that humanity stops threatening its life-support system. We are called to assist the Earth to heal her wounds and in the process heal our own - indeed, to embrace the whole of creation in all its diversity, beauty and wonder.",
	},
	{
		id: 9,
		author: "Wangari Maathai",
		text: "We owe it to ourselves and to the next generation to conserve the environment so that we can bequeath our children a sustainable world that benefits all.",
	},
];

const QuotesSlider = () => {
	return (
		<section id="quotes" className="pt-6 md:pt-12  mb-10 md:mb-20">
			{/* <h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				QuotesSlider
			</h3> */}
			{/* <hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				Every Review, a Testimonial of Connection: Join Our Community in
				Celebrating the <br /> Positive Ripples of Our Forest Engagement
			</p> */}
			<div className="grid grid-cols-1 grid-rows-3">
				{/* <div className="max-w-xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-secondary-white">
						Don't just take our word for it...{""}
						<br className="hidden sm:block lg:hidden" />
						Read reviews from our customers
					</h2>

					<p className="mt-4 text-secondary-white">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
						veritatis illo placeat harum porro optio fugit a culpa sunt id!
					</p>

					<div className="hidden lg:mt-8 lg:flex lg:gap-4">
						<button className="prev-button rounded-full border border-customGreen p-3 text-customGreen hover:bg-customGreen hover:text-white">
							<span className="sr-only">Previous Slide</span>
							<i>
								<BsChevronLeft />
							</i>
						</button>

						<button className="next-button rounded-full border border-customGreen p-3 text-customGreen hover:bg-customGreen hover:text-white">
							<span className="sr-only">Next Slide</span>
							<i>
								<BsChevronRight />
							</i>
						</button>
					</div>
				</div> */}
				<div className="auto-rows-[1fr] lg:mx-0">
					<div className="swiper-container !overflow-hidden">
						<div className="swiper-wrapper">
							<Swiper
								// spaceBetween={50}
								slidesPerView={1}
								centeredSlides={true}
								loop={true}
								autoplay={{
									delay: 7000,
									disableOnInteraction: false,
								}}
								speed={1000}
								parallax={true}
								modules={[Autoplay, Parallax]}
								className="flex ">
								<div
									slot="container-start"
									className="parallax-bg"
									data-swiper-parallax="50%"></div>
								{fallbackQuotes.map((card, idx) => (
									<SwiperSlide key={idx} className="">
										<QuotesCard key={card.id} {...card} />
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

export default QuotesSlider;

const QuotesCard = ({ author, text }) => (
	<div className="swiper-slide">
		<blockquote className="flex flex-col justify-between bg-tertiary-black">
			<div className="mt-4 p-12">
				<p className="mt-4 leading-relaxed tracking-wide text-secondary-white first-letter:">
					{text}
				</p>
				<footer className="mt-8 text-sm text-customGreen tracking-wider">
					&mdash; {author}
				</footer>
			</div>
		</blockquote>
	</div>
);
