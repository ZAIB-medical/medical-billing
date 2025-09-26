import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BgPage3 = () => {
    const img = "https://cloud.appwrite.io/v1/storage/buckets/6798a41d001fa41e179c/files/6798e9a30035e31e9d6f/view?project=6794f195002eec77bf76&project=6794f195002eec77bf76"
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='w-[100%] h-[50vh] bg-center bg-no-repeat bg-cover'>
            <div className="BgPage3Content h-[100%] w-[100%] bg-[#00000072] flex flex-col items-center gap-[1em] text-center justify-center">
                <h2 className='text-5xl w-[70%] font-bold text-white'>Find Revenue Optimized Neurology Billing Services with Transcure</h2>
                <p className='text-xl w-[70%] text-white'>Our neurology billing and coding services are designed to meet the specific needs of your practice. From claim submission to payment posting, we handle every aspect of the billing cycle with precision. </p>
                <Link href={'/'} className='text-xl bg-[var(--col1)] text-white px-4 py-2 items-center gap-3 font-bold flex max-w-max'>Book An Appointment <FaArrowRightLong /></Link>
            </div>
        </div>
    )
}

export default BgPage3