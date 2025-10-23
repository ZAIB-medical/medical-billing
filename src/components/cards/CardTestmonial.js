import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const CardTestmonial = ({ img, name, job, message }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 shadow-lg shadow-[#919191] mx-auto items-center p-6 md:p-8 text-center bg-white rounded-lg relative">
      {/* Profile Image */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 -mt-12 md:-mt-16">
        <Image
          src={img}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-full border-4 border-[var(--col1)]"
        />
      </div>

      {/* Name & Job */}
      <h2 className="text-lg md:text-xl font-bold mt-2 md:mt-4">{name}</h2>
      <p className="text-gray-500 text-sm md:text-base">{job}</p>

      {/* Quote Icon */}
      <FaQuoteLeft className="text-gray-400 text-xl md:text-2xl mt-2" />

      {/* Message */}
      <p className="text-gray-500 text-sm md:text-base mt-2">{message}</p>
    </div>
  )
}

export default CardTestmonial;
