import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const FifthSection = () => {
  return (
    <div className='flex h-[100vh] items-center justify-center top-0 left-0 z-[-12]'  style={{background: 'linear-gradient(to right, #0a2342, #101722)'}}>
        <div className="leftfifthsection flex flex-col items-left gap-[2em] w-[50%]">
            <p className='text-[var(--col1)] text-3xl'>It starts with our people.</p>
            <h2 className='text-5xl w-[60%]'>We have the brightest minds in our industry to address customer challenges.</h2>
            <p className='text-gray-400'>We employ people that understand the responsibilities that come with protecting human health and the environment.</p>
            <div className="RightHeroButton bg-[#6A98D0] max-w-max">
                <Link href={'/'} className="text-white flex text-xl px-4 py-2 items-center gap-3">
                    Locate Your Expert
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
        <div className="rightfifthsection ">
            <Image src={'/bg-scense.png'} width={500} height={700} alt='Bglilhgj' style={{
                height: '100%',
                width: 'auto'
            }} />
        </div>
    </div>
  )
}

export default FifthSection