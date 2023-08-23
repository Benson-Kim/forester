import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const environquotes = [
	{
		id: 1,
		quote:
			"You cannot protect the environment unless you empower people, you inform them, and you help them understand that these resources are their own, that they must protect them.",
	},
	{
		id: 2,
		quote:
			"When we plant trees, we plant the seeds of peace and seeds of hope.",
	},
	{
		id: 3,
		quote:
			"In the course of history, there comes a time when humanity is called to shift to a new level of consciousness, to reach a higher moral ground. A time when we have to shed our fear and give hope to each other. That time is now.",
	},
	{
		id: 4,
		quote:
			"You can make a lot of speeches, but the real thing is when you dig a hole, plant a tree, give it water, and make it survive. That's what makes the difference.",
	},
	{
		id: 5,
		quote:
			"You cannot enslave a mind that knows itself. That values itself. That understands itself.",
	},
	{
		id: 6,
		quote:
			"No matter who or where we are, or what our capabilities, we are called to do the best we can.",
	},
	{
		id: 7,
		quote:
			"Every one of us can make a contribution. And quite often we are looking for the big things and forget that, wherever we are, we can make a contribution. Sometimes I tell myself, I may only be planting a tree here, but just imagine what's happening if there are billions of people out there doing something. Just imagine the power of what we can do.",
	},
	{
		id: 8,
		quote:
			"Recognizing that sustainable development, democracy and peace are indivisible is an idea whose time has come... Today we are faced with a challenge that calls for a shift in our thinking, so that humanity stops threatening its life-support system. We are called to assist the Earth to heal her wounds and in the process heal our own - indeed, to embrace the whole of creation in all its diversity, beauty and wonder.",
	},
	{
		id: 9,
		quote:
			"We owe it to ourselves and to the next generation to conserve the environment so that we can bequeath our children a sustainable world that benefits all.",
	},
];

const Quotes = () => {
	const [apiquotes, setApiQuotes] = useState([]);
	const [error, setError] = useState("");

	const category = "environmental";

	useEffect(() => {
		axios
			.get("https://api.api-ninjas.com/v1/quotes?category=" + category, {
				headers: {
					"X-Api-Key": "KyXz/4RNH1kZbCveOpoQKg==FzUtor12ZqfkFYkq",
				},
			})
			.then((response) => {
				if (response.status === 200) {
					setApiQuotes(response.data);
				} else {
					console.log("Error fetching airport details:", response);
					setError(error);
				}
			})
			.catch((error) => {
				setError(error);
			});
	}, []);

	return (
		<section
			id="quotes"
			className="pt-6 md:pt-12 pb-10 md:pb-20 mt-10 md:mt-20 mx-auto relative">
			<h3 className="flex items-center justify-center uppercase text-3xl leading-4 tracking-[2px] font-medium text-customGreen mb-0 pb-4">
				Quotes
			</h3>
			<hr className="w-12 h-0.5 mx-auto mt-5 bg-secondary-white" />
			<p className="text-secondary-white tracking-wide text-center pt-6 leading-6 text-sm mb-8 ">
				Where Nature Speaks Through Words: Inspiring Quotes to Embrace
				<br /> the Beauty of the Wild
			</p>

			{error ? (
				<QuotesSlider sourcequotes={environquotes} />
			) : (
				<QuotesSlider sourcequotes={apiquotes} />
			)}

			{/* <QuotesSlider sourcequotes={environquotes} /> */}
		</section>
	);
};

export default Quotes;

export const QuotesSlider = ({ sourcequotes }) => {
	return (
		<blockquote className="bg-inherit text-customGreen text-3xl font-semibold mb-6">
			{/* <p className="text-white text-3xl font-semibold mb-6">New Releases</p> */}
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="bg-secondary-black">
				<>
					{sourcequotes?.length
						? sourcequotes.map((quote, index) => {
								return (
									<SwiperSlide key={index}>
										<div className="bg-inherit">
											{/* <div className="h-[158px] w-[158px] object-cover">
												<img
													className="h-[158px] rounded-md"
													src={album.images[1].url}
													alt=""
												/>
											</div> */}
											<p className="">{quote.quote}</p>
											<p className="line-clamp-1 text-gray-300 pt-4">
												{quote.author}
											</p>
										</div>
									</SwiperSlide>
								);
						  })
						: null}
				</>
			</Swiper>
		</blockquote>
	);
};
