// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
// 	Navigation,
// 	Pagination,
// 	Scrollbar,
// 	A11y,
// 	EffectCube,
// 	Autoplay,
// } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/a11y";
// import "swiper/css/effect-cube";

// const Carousel = ({ slides }) => {
// 	return (
// 		<Swiper
// 			modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCube]}
// 			spaceBetween={50}
// 			slidesPerView={3}
// 			navigation
// 			autoplay={{
// 				delay: 3000,
// 				disableOnInteraction: false,
// 			}}
// 			pagination={{ clickable: true }}
// 			scrollbar={{ draggable: true }}
// 			onSlideChange={() => console.log("slide change")}
// 			onSwiper={(swiper) => console.log(swiper)}
// 			effect={"cube"}
// 			cubeEffect={{
// 				shadow: true,
// 				slideShadows: true,
// 				shadowOffset: 20,
// 				shadowScale: 0.94,
// 			}}>
// 			{slides.map((slide) => (
// 				<SwiperSlide key={slide.image}>
// 					<img src={slide.image} alt={slide.title} />
// 				</SwiperSlide>
// 			))}
// 		</Swiper>
// 	);
// };

// export default Carousel;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel({ slides }) {
	return (
		<>
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
				{slides.map((slide) => (
					<SwiperSlide key={slide.image}>
						<img src={slide.image} alt={slide.title} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
