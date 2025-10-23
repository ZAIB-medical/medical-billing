import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const PageBg2 = (props) => {
  const title = 'Effortlessly Manage Your Laboratory Billing'
  const short = 'Our services are tailored to meet the needs of independent labs. From claim submission to denial management, we focus on maximizing revenue while keeping your operating costs low.'

  return (
    <div className={`flex flex-col md:flex-row w-full bg-[#202D42] text-white`}>
      
      {/* Left Section */}
      <div className={`leftPageBg2 w-full md:w-1/2 flex justify-center items-center py-12 md:py-0`}>
        <div className='flex flex-col justify-center w-4/5 gap-6 md:gap-8'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>{title}</h2>
          <p className='text-base sm:text-lg md:text-xl text-white/90'>{short}</p>
          <Link
            href='/'
            className='text-base sm:text-lg md:text-xl bg-[var(--col1)] text-white px-4 py-3 md:px-6 md:py-4 items-center gap-2 font-bold flex max-w-max rounded-lg hover:bg-[#1a2233] transition'
          >
            Book An Consultation <FaArrowRightLong />
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="rightPageBg2 w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={'/bg-scense.png'}
          height={600}
          width={700}
          alt='ServicesBg'
          className='h-auto w-full object-contain'
        />
      </div>
    </div>
  )
}

export default PageBg2
