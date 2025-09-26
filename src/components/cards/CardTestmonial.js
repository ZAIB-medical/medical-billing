import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const CardTestmonial = (props) => {
  return (
    <div className='flex flex-col gap-[1em] shadow-lg shadow-[#919191] mx-auto items-center p-3 text-center mt-[30%]'>
        <Image src={props.img} height={150} width={150} alt='testimg' className='rounded-full mt-[-30%]' />
        <h2 className='font-bold'>{props.name}</h2>
        <p className='text-gray-500'>{props.job}</p>
        <div><FaQuoteLeft className='text-gray-500' /></div>
        <p className='text-gray-500'>{props.message}</p>
    </div>
  )
}

export default CardTestmonial