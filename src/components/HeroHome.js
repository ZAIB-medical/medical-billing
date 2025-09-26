import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong, FaMessage } from "react-icons/fa6";

const HeroHome = () => {
    const slides = [
        {
            text: "We believe",
            heading: "Integrity matters.",
        },
        {
            text: "We inspire",
            heading: "Excellence in action.",
        },
        {
            text: "We deliver",
            heading: "Sustainable solutions.",
        },
    ];

    return (
        <div className="hero-container relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="background-video absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="/bgVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Sliding Text */}
            <div className="slider-container absolute inset-0 flex justify-center items-end pb-[10%] bg-[#00000050]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide absolute flex items-center justify-between px-[10vw] gap-[10vw] text-white opacity-0 transform translate-y-10 transition-opacity duration-1000 ease-in-out transition-transform ${
                            index === 0
                                ? "animate-slide-1"
                                : index === 1
                                ? "animate-slide-2"
                                : "animate-slide-3"
                        }`}
                    >
                        <div>
                            <p className="text-4xl">{slide.text}</p>
                            <h2 className="text-7xl font-bold">{slide.heading}</h2>
                        </div>
                        <div className="RightHeroButton bg-[#6A98D0]">
                            <Link
                                href={"/"}
                                className="text-white flex text-xl px-4 py-2 items-center gap-3"
                            >
                                Learn More
                                <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fixed Message Icon */}
            {/* Fixed Message Icon */}
<Link
    href="/contact"
    className="fixed bottom-20 right-6 z-50 bg-[#6A98D0] p-4 rounded-full shadow-lg hover:bg-[#5a88c0] transition-colors"
>
    <FaMessage className="text-white text-2xl" />
</Link>


        </div>
    );
};

export default HeroHome;
