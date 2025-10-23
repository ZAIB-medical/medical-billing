'use client'
import Image from 'next/image'
import React from 'react'

const L2RTextImg = (props) => {
  return (
    <div className={`flex flex-col md:flex-${props.r2l ? 'row-reverse' : 'row'} w-[90%] md:w-[70%] mx-auto gap-8 md:gap-[10vw] my-12`}>
      {/* Left Text Section */}
      <div className="leftL2R w-full md:w-1/2 flex flex-col justify-center gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{props.title || 'Independent Labs'}</h2>
        <p className="text-base sm:text-lg md:text-lg">{props.desc || 'Our services are tailored to meet the needs of independent labs. From claim submission to denial management, we focus on maximizing revenue while keeping your operating costs low.'}</p>
        {props.desc2 && <p className="text-base sm:text-lg md:text-lg">{props.desc2}</p>}
        {props.desc3 && <p className="text-base sm:text-lg md:text-lg">{props.desc3}</p>}
      </div>

      {/* Right Image Section */}
      <div className="rightL2R w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <Image
            src={props.img}
            alt="l2r"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default L2RTextImg
