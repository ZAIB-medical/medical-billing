'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const FifthSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row h-auto md:h-[100vh] items-center justify-center relative px-4 sm:px-8"
      style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
    >
      {/* Left Text Section */}
      <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2">
        <p className="text-[var(--col1)] text-2xl sm:text-3xl font-medium">It starts with our people.</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl w-full sm:w-4/5 md:w-[80%] font-bold">
          Advanced Reporting & Analytics
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl w-full sm:w-4/5 md:w-[80%]">
          Combines financial and operational data in a single view, allowing you to make more informed practice decisions.
        </p>
        <div className="bg-[#6A98D0] max-w-max mt-2 rounded">
          <Link
            href={'/'}
            className="text-white flex text-lg sm:text-xl px-4 py-2 items-center gap-3"
          >
            Locate Your Expert
            <FaArrowRightLong />
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <div className="relative w-full md:w-[80%] h-[300px] sm:h-[400px] md:h-[600px]">
          <Image
            src={'/bgsection5.webp'}
            alt="Background"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default FifthSection
