import Image from 'next/image';
import React from 'react';

const AppoinmentForm = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full px-6 py-12 bg-gray-50">
      {/* Heading Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
        Book an Appointment
      </h2>
      <p className="text-lg text-gray-500 text-center max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem eaque ipsa possimus consectetur sed vero alias maiores. Animi, obcaecati?
      </p>

      {/* Appointment Form Section */}
      <div className="AppoinmentMain flex flex-col md:flex-row w-full max-w-6xl gap-12 items-center">
        {/* Left Section: Image */}
        <div className="leftAppoinment flex justify-center w-full md:w-1/2">
          <Image 
            src="/bg-scense.png" 
            width={600} 
            height={600} 
            alt="Appointment Illustration" 
            className="h-[70vh] w-auto" 
          />
        </div>

        {/* Right Section: Form */}
        <form className="rightAppoinment flex flex-col gap-6 w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <input 
            type="text" 
            placeholder="Full Name" 
            required
            className="outline-none border-b-2 border-gray-300 py-2 focus:border-blue-500 transition duration-300"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="outline-none border-b-2 border-gray-300 py-2 focus:border-blue-500 transition duration-300"
          />
          <input 
            type="tel" 
            placeholder="Phone" 
            className="outline-none border-b-2 border-gray-300 py-2 focus:border-blue-500 transition duration-300"
          />
          <input 
            type="tel" 
            placeholder="Reson of Appointment" 
            className="outline-none border-b-2 border-gray-300 py-2 focus:border-blue-500 transition duration-300"
          />
          <textarea 
            placeholder="Message" 
            className="outline-none border-b-2 border-gray-300 py-2 focus:border-blue-500 transition duration-300 resize-none h-24"
          ></textarea>
          <button type='submit' className="w-full py-3 bg-[var(--bg1)] text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppoinmentForm;
