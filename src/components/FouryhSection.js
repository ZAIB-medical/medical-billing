'use client'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const FourthSection = () => {
  return (
    <div
      className='flex flex-col items-center text-center justify-center min-h-screen gap-6 px-4 sm:px-8 md:px-16'
      style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
    >
      <p className='text-xl sm:text-2xl md:text-3xl text-[var(--col1)] font-light'>
        For 50 years and for tens of thousands of customers,
      </p>

      <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold w-full sm:w-4/5 md:w-3/5'>
        {"We’ve been innovating responsible, sustainable solutions."}
      </h2>

      <p className='text-base sm:text-lg md:text-xl text-gray-400 w-full sm:w-4/5 md:w-2/5'>
        Let us help you find the highest and best use of your waste.
      </p>

      <div className="RightHeroButton mt-4">
        <Link
          href='/'
          className="bg-[#6A98D0] text-white flex items-center gap-3 px-4 py-2 text-lg sm:text-xl rounded hover:brightness-110 transition"
        >
          Locate Your Expert
          <FaArrowRightLong className="text-xl sm:text-2xl" />
        </Link>
      </div>
    </div>
  )
}

export default FourthSection
