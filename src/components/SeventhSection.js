import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const medicalNewsPosts = [
    {
        title: "Breakthrough in Cancer Research",
        description: "Scientists have developed a new treatment that shows promise in targeting cancer cells without harming healthy tissue.",
        date: "Nov 11th, 2024",
        img: "https://www.heritage-enviro.com/wp-content/uploads/2024/10/FSP_2109-scaled-e1736268244292.jpg"
    },
    {
        title: "AI Revolutionizing Diagnosis",
        description: "Artificial Intelligence is now capable of identifying diseases with unprecedented accuracy, reducing diagnostic errors significantly.",
        date: "Dec 1st, 2024",
        img: "https://www.heritage-enviro.com/wp-content/uploads/2024/12/IMG_5660-scaled-e1734975136631.jpg"
    },
    {
        title: "Vaccine Development Speeds Up",
        description: "New mRNA technology allows for faster development and deployment of vaccines against emerging diseases.",
        date: "Jan 5th, 2025",
        img: "https://www.heritage-enviro.com/wp-content/uploads/2024/12/Rachel_Evans_PR-Website-Graphic.png"
    },
    {
        title: "Breakthrough in Alzheimer's Treatment",
        description: "A new drug shows promise in slowing the progression of Alzheimer's disease, offering hope to millions.",
        date: "Feb 15th, 2025",
        img: "https://www.heritage-enviro.com/wp-content/uploads/2024/11/Veterans_Day_2024_Blog_Graphic.png"
    },
    {
        title: "Global Initiative for Rare Diseases",
        description: "An international collaboration aims to improve treatment options for patients with rare and neglected diseases.",
        date: "Mar 20th, 2025",
        img: "https://www.heritage-enviro.com/wp-content/uploads/2024/11/Teresa-Wade_WAA_Blog_Thumbnail-1.png"
    },
    {
        title: "New Study Links Diet to Mental Health",
        description: "Research shows a strong connection between balanced diets and improved mental health outcomes.",
        date: "Apr 25th, 2025",
        img: "https://www.heritage-enviro.com/wp-content/uploads/2024/11/Lead-Prevention-Week-Blog-Graphic-V1.png"
    }
];

const SeventhSection = () => {
    return (
        <div 
            className="min-h-screen text-white relative z-10 flex flex-col gap-12 justify-center items-center py-16"
            style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
        >
            {/* Section Title */}
            <div className="flex flex-col justify-center items-center gap-5 w-[80%] text-center">
                <p className="text-3xl text-[var(--col1)]">Insights & News</p>
                <h2 className="text-4xl sm:text-5xl">Working to Better Our Natural Environments</h2>
                <Link className="flex gap-3 items-center text-xl sm:text-2xl" href={'/'}>
                    View All News <FaArrowRightLong />
                </Link>
            </div>

            {/* News Grid */}
            <div className="gridBoxesSeventhSection grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] px-5">
                {medicalNewsPosts.map((post, index) => (
                    <div
                        key={index}
                        className="group text-white bg-center bg-cover bg-no-repeat rounded-lg shadow-lg w-full h-[300px] overflow-hidden flex justify-center items-end"
                        style={{ backgroundImage: `url(${post.img})` }}
                    >
                        {/* Hover Content */}
                        <div className="p-4 bg-[#000000a0] h-full hidden flex-col justify-center items-center gap-5 group-hover:flex transition duration-300">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h3>
                            <p className="text-sm sm:text-base mb-4 text-center">{post.description}</p>
                            <Link href="/" className="text-white px-4 py-2 bg-[#6A98D0] rounded-md text-lg flex items-center gap-2">
                                Read More <FaArrowRightLong />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeventhSection;
