import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FiRefreshCw } from 'react-icons/fi'

const PageBg2 = (props) => {
    const title = 'Effortlessly Manage Your Laboratory Billing'
    const short = 'Our services are tailored to meet the needs of independent labs. From claim submission to denial management, we focus on maximizing revenue while keeping your operating costs low.'
    return (
        <div className={`flex w-[100%] bg-[#202D42] text-white ${props.r2l === true ? 'flex-row-reverse' : ''}`}>
            <div className="leftPageBg2 w-[50%] flex justify-center items-center">
                <div className='flex flex-col justify-center w-[80%] gap-[2em]'>
                    <h2 className='text-5xl font-bold'>{title}</h2>
                    <p className='text-xl'>{short ? short : null}</p>
                    <Link href={'/'} className='text-xl bg-[var(--col1)] text-white px-2 py-4 items-center gap-3 font-bold flex max-w-max'>Book An Consultation <FaArrowRightLong /></Link>
                </div>
            </div>
            <div className="rightPageBg2 w-[50%]">
                <Image src={'/bg-scense.png'} height={600} width={700} alt='ServicesBg' className='h-[auto] w-[100%]' />
            </div>
        </div>
    )
}

export default PageBg2