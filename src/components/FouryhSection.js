import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const FouryhSection = () => {
    return (
        <div className='flex flex-col items-center text-center h-[100vh] justify-center sticky top-0 left-0 z-[-12] gap-[2em]' style={{background: 'linear-gradient(to right, #0a2342, #101722)'}}>
            <p className='text-3xl text-[var(--col1)]'>For 50 years and for tens of thousands of customers,</p>
            <h2 className='text-center text-5xl w-[60%]'>{"we’ve been innovating responsible, sustainable solutions."}</h2>
            <p className='text-gray-400'>Let us help you find the highest and best use of your waste.</p>
            <div className="RightHeroButton bg-[#6A98D0]">
                <Link href={'/'} className="text-white flex text-xl px-4 py-2 items-center gap-3">
                    Locate Your Expert
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    )
}

export default FouryhSection