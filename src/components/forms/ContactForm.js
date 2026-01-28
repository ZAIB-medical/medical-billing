'use client'
import React from 'react'
import Image from 'next/image'

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full px-4 sm:px-6 lg:px-12 py-12 bg-gray-50">
      {/* Heading Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">
        Get in Touch
      </h2>
      <p className="text-base sm:text-lg text-gray-500 text-center max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Appointment Form Section */}
      <div className="AppoinmentMain flex flex-col md:flex-row w-full max-w-6xl gap-8 md:gap-12 items-center">
        {/* Left Section: Image */}
        <div className="leftAppoinment flex justify-center w-full md:w-1/2">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px]">
            <Image 
              src="/contactimage.png"
              alt="Appointment Illustration"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* Right Section: Form */}
        <form className="rightAppoinment flex flex-col gap-4 sm:gap-6 w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
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
            type="text" 
            placeholder="Reason for Appointment" 
            className="outline-none border-b-2 border-gray-300 py-2 focus:border-blue-500 transition duration-300"
          />
          <textarea 
            placeholder="Message" 
            className="outline-none border-b-2 border-gray-300 py-2 focus:border-blue-500 transition duration-300 resize-none h-24"
          ></textarea>
          <button 
            type="submit" 
            className="w-full py-3 bg-[var(--bg1)] text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
