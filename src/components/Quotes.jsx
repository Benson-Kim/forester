import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Quotes = () => {
	const slides = [
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

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const newIndex = (currentIndex - 1 + slides.length) % slides.length;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const newIndex = (currentIndex + 1) % slides.length;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [currentIndex]);

	return (
		<section id="quotes" className="pt-6 md:pt-12 mb-10 md:mb-20">
			<div className="w-full m-auto py-16 px-4 relative group">
				<blockquote className="min-h-[300px] w-full h-full flex flex-col justify-between items-center bg-tertiary-black">
					<p className="mt-4 leading-relaxed tracking-wide text-secondary-white first-letter:">
						{slides[currentIndex].text}
					</p>
					<footer className="mt-8 text-sm text-customGreen tracking-wider">
						{slides[currentIndex].author}
					</footer>
				</blockquote>
				{/* Left Arrow */}
				<div className="absolute top-[50%] -translate-x-0 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>
				{/* Right Arrow */}
				<div className="absolute top-[50%] -translate-x-0 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>
				<div className="flex top-4 justify-center py-2">
					{slides.map((_, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => setCurrentIndex(slideIndex)}
							className={`text-2xl cursor-pointer ${
								slideIndex === currentIndex ? "text-primary-green" : ""
							}`}>
							<RxDotFilled />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Quotes;
