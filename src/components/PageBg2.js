import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

const PageBg2 = ({ img, r2l = false, title, short, description }) => {
  const heading = title || 'Default Title'
  const shortText = short || 'Default short text'
  const desc = description || ''

  return (
    <div
      className={`flex flex-col md:flex-row w-full bg-[#202D42] text-white ${
        r2l ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Left Section */}
      <div className="leftPageBg2 w-full md:w-1/2 flex justify-center items-center py-12 md:py-0">
        <div className="flex flex-col justify-center w-4/5 gap-6 md:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{heading}</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90">{shortText}</p>
          {desc && <p className="text-sm sm:text-base md:text-lg text-white/70">{desc}</p>}
          <Link
            href="/"
            className="text-base sm:text-lg md:text-xl bg-[var(--col1)] text-white px-4 py-3 md:px-6 md:py-4 items-center gap-2 font-bold flex max-w-max rounded-lg hover:bg-[#1a2233] transition"
          >
            Book An Consultation <FaArrowRightLong />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="rightPageBg2 w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={img}
          height={600}
          width={700}
          alt="Service Background"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  )
}

// ✅ Add this line to fix the error
export default PageBg2
