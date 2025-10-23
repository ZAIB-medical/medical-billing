import React from 'react';
import CardTestmonial from './cards/CardTestmonial';

const Testimonials = ({ data }) => {
  return (
    <div className="flex flex-col gap-8 my-12 px-4 sm:px-8">
      {/* Heading */}
      <div className="flex flex-col text-center gap-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Testimonials</h2>
        <p className="text-gray-600 text-sm sm:text-base">Satisfied Providers are our Testaments</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
        {data.map((item, index) => (
          <CardTestmonial
            key={index}
            name={item.name}
            job={item.job}
            message={item.message}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
