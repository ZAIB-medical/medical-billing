import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BgPage3 = () => {
  return (
    <div
      className="w-full bg-gradient-to-r from-[#0a2342] to-[#101722] py-16 sm:py-20 flex items-center justify-center"
    >
      <div className="text-center px-4 sm:px-6 lg:px-12 flex flex-col gap-4 sm:gap-6 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white w-full sm:w-4/5 md:w-3/5 lg:w-2/3 mx-auto">
          Find Revenue Optimized Neurology Billing Services with ExpertMd
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white w-full sm:w-4/5 md:w-3/5 lg:w-2/3 mx-auto">
          Our neurology billing and coding services are designed to meet the specific needs of your practice. From claim submission to payment posting, we handle every aspect of the billing cycle with precision.
        </p>
        <Link
          href="/"
          className="text-white bg-[var(--col1)] px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-bold flex items-center gap-2 rounded mx-auto"
        >
          Book An Appointment <FaArrowRightLong />
        </Link>
      </div>
    </div>
  )
}

export default BgPage3
