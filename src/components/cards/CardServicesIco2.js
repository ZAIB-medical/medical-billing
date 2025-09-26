import Image from 'next/image';
import React from 'react';

const CardServicesIco2 = ({ img, name, desc }) => {
  return (
    <div className="bg-[var(--bg1)] group transition duration-500 w-full max-w-[300px] text-white p-8 flex flex-col items-center text-center gap-4 mx-auto rounded-lg shadow-lg hover:shadow-xl">
      {/* Icon */}
      <Image src={img} height={60} width={60} alt={`${name} icon`} className="transition-transform duration-500 group-hover:scale-110" />

      {/* Title */}
      <h2 className="text-xl font-bold">{name}</h2>

      {/* Description (visible on hover) */}
      <p className="text-gray-300 text-sm hidden group-hover:block transition-opacity duration-500">
        {desc}
      </p>
    </div>
  );
};

export default CardServicesIco2;
