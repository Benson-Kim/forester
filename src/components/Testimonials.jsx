import React from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

// import required modules
import { Autoplay, EffectCube, Navigation } from "swiper/modules";

const feedback = [
	{
		id: 1,
		content:
			"Exploring these enchanting woods was a dream come true. The towering trees and serene atmosphere left me in awe. A must-visit for nature enthusiasts!",
		name: "Sophia Anderson",
		img: "https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.webp?b=1&s=170667a&w=0&k=20&c=FL5v_ghmM3iWVOKfYahkC7Tdn3QxEb7CccoE9_atiE4=",
		title: "Farmer",
	},
	{
		id: 2,
		content:
			"The forest trails provided a rejuvenating escape from the city's hustle and bustle. The sights, sounds, and fresh air are truly invigorating.",
		name: "Michael Carter",
		img: "https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.webp?b=1&s=170667a&w=0&k=20&c=FL5v_ghmM3iWVOKfYahkC7Tdn3QxEb7CccoE9_atiE4=",
		title: "Priest, Mathari",
	},
	{
		id: 3,
		content:
			"I found my peace amidst these ancient trees. The tranquility of the forest is a treasure that everyone should experience.",
		name: "Ella Martinez",
		img: "https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.webp?b=1&s=170667a&w=0&k=20&c=FL5v_ghmM3iWVOKfYahkC7Tdn3QxEb7CccoE9_atiE4=",
		title: "Founder & Leader",
	},
	{
		id: 4,
		content:
			"Exploring these enchanting woods was a dream come true. The towering trees and serene atmosphere left me in awe. A must-visit for nature enthusiasts!",
		name: "Sophia Anderson",
		img: "https://media.istockphoto.com/id/1400274566/photo/angus-cows-grazing.webp?b=1&s=170667a&w=0&k=20&c=z3Oh-5GCtIsXLda2WOiri1fHfZGsPJMg_4bT0whsloM=",
		title: "Farmer",
	},
	{
		id: 5,
		content:
			"The forest trails provided a rejuvenating escape from the city's hustle and bustle. The sights, sounds, and fresh air are truly invigorating.",
		name: "Michael Carter",
		img: "https://media.istockphoto.com/id/1441071756/photo/photo-of-an-asian-senior-male-farmer-wearing-straw-hat-with-his-freshly-harvested-bananas-in.webp?b=1&s=170667a&w=0&k=20&c=tBaqQInt9wz1rxP4w-k5APvVTaRKjElDaxUVqD-5M4c=",
		title: "Organic Farmer",
	},
	{
		id: 6,
		content:
			"I found my peace amidst these ancient trees. The tranquility of the forest is a treasure that everyone should experience.",
		name: "Ella Martinez",
		img: "https://media.istockphoto.com/photos/portrait-of-young-female-gardener-working-in-flower-nursery-picture-id1219687787",
		title: "Gardener",
	},
	{
		id: 7,
		content:
			"Nature's beauty shines through every corner of this forest. As a photographer, I captured the essence of the woods in every shot.",
		name: "Alex Turner",
		img: "https://images.unsplash.com/photo-1595168638475-03b6b392d90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGhlciUyMHRyZWUlMjBwbGFudGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
		title: "Photographer",
	},
	{
		id: 8,
		content:
			"A walk through these woods is like stepping into a fairytale. The vibrant colors and diverse wildlife make it a magical experience.",
		name: "Olivia Lee",
		img: "https://media.istockphoto.com/id/1314925308/photo/two-men-planted-a-tree.webp?b=1&s=170667a&w=0&k=20&c=BAxzygPlMuD9dLDmsOKysRKFUitVc2Kkd3SSOlWFatM=",
		title: "Adventurer",
	},
	// Add more forest reviews here
];

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				Testimonials
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				Every Review, a Testimonial of Connection: Join Our Community in
				Celebrating the <br /> Positive Ripples of Our Forest Engagement
			</p>
			<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-4 lg:items-center lg:gap-x-16">
				<div className="max-w-xl text-center hidden lg:block lg:col-span-2">
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
				</div>
				<div className="lg:col-span-2 lg:mx-0">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<Swiper
								spaceBetween={32}
								slidesPerView={2}
								centeredSlides={true}
								loop={true}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false,
								}}
								effect={"cube"}
								cubeEffect={{
									shadow: true,
									slideShadows: true,
									shadowOffset: 20,
									shadowScale: 0.94,
								}}
								navigation={{
									nextEl: ".next-button",
									prevEl: ".prev-button",
								}}
								breakpoints={{
									640: {
										centeredSlides: true,
										slidesPerView: 1,
									},
									1024: {
										centeredSlides: false,
										slidesPerView: 1.5,
									},
								}}
								modules={[Autoplay, EffectCube, Navigation]}
								className="">
								{feedback.map((card, idx) => (
									<SwiperSlide
										key={idx}
										className="grid grid-cols-1 justify-items-center">
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
	<div className="swiper-slide overflow-auto contain">
		<div className="w-full shadow-sm flex flex-col bg-tertiary-black hover:-translate-y-1.5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition ease-in-out duration-500">
			<div className="h-36 desktop:h-40 overflow-hidden relative ">
				<img
					src={img}
					alt={title}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="mt-4 px-12 py-6">
				<p className="text-2xl font-bold text-secondary-white sm:text-3xl">
					{title}
				</p>

				<p className="mt-4 leading-relaxed tracking-wide text-secondary-white">
					{content}
				</p>
				<footer className="mt-8 text-sm text-customGreen tracking-wider">
					&mdash; {name}
				</footer>
			</div>
		</div>
	</div>
);
