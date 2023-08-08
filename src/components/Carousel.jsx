import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const images = [
	{
		id: 1,
		src: "https://media.istockphoto.com/id/1487313389/photo/creation-of-the-almighty-creator-with-its-natural-splendor.webp?b=1&s=170667a&w=0&k=20&c=yue9iTRoFmBTxYLoFT17aaKZG9skrvDCl14yn1kMa5k=",
	},
	{
		id: 2,
		src: "https://media.istockphoto.com/id/174851742/photo/early-morning-on-the-tea-plantation-in-india-asia.webp?b=1&s=170667a&w=0&k=20&c=Tfe6J76UUinX0ECplO-VJPLv5JrzSTtJvV0PmqElZwQ=",
	},
	{ id: 3, src: "" },
	{ id: 4, src: "" },
	{ id: 5, src: "" },
	{ id: 6, src: "" },
	{ id: 7, src: "" },
	{
		id: 8,
		src: "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
	},
	{
		id: 9,
		src: "https://plus.unsplash.com/premium_photo-1678655852256-5fc5670b83eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
	},
	{
		id: 10,
		src: "https://media.istockphoto.com/id/1151367041/photo/impressive-view-of-green-garden-location-place-sicily-island-italy-europe.webp?b=1&s=170667a&w=0&k=20&c=eLO4mZuMhmq71lyPyFxhxRnD3dlZxXj6zQYW_yG1ZhE=",
	},
];

const Carousel = () => {
	return (
		<section className="py-10 mt-10 bg-secondary-white relative">
			<h3 className="flex items-center justify-center capitalize text-4xl font-semibold text-primary-black mb-12">
				Testimonials
			</h3>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				className="py-4 px-3 text-blue-800 relative">
				{/* {images.map((image, index) => {
					<SwiperSlide key={index}>
						<img src={image.} alt="" srcset="" />
					</SwiperSlide>;
				})} */}
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Carousel;
