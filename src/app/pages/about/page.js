import PageBg from '@/components/PageBg'
import L2RTextImg from '@/components/servicesComp/L2RTextImg'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import React from 'react'
import { GrContact } from "react-icons/gr";
import { IoClipboard } from "react-icons/io5";

const testmonials = [
    {
        name: 'Dr. Anthony',
        job: 'National Medical Labs',
        message: 'Transcure t has helped us save countless hours and improve our bottom line. The team is friendly, professional, and always available to answer our questions.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png'
    },
    {
        name: 'Dr. Richard',
        job: 'Laboratory Manager.',
        message: 'I used to dread our billing process, but since implementing Transcure, it has become much more manageable and efficient',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png'
    },
    {
        name: 'Dr. Susan',
        job: 'Laboratory Manager',
        message: 'Transcure helped us save time and improve accuracy in our billing coordination. Highly recommended for any lab!',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png'
    },
]


const About = () => {
    return (
        <div>
            <PageBg name={'About Us'} short={'Expert MDBS is a trusted medical billing and practice management company helping healthcare providers streamline operations, maximize revenue, and focus on patient care.'} />
            <div className="page">
                <L2RTextImg img={'https://transcure.net/wp-content/uploads/2024/01/image-11.png'} />
                <L2RTextImg r2l={true} img={'https://transcure.net/wp-content/uploads/2024/01/image-12.png'} />
                <Testimonials data={testmonials} />
                <div className="aboutPageDetails  w-[60%] flex text-center flex-col gap-5 items-center shadow-lg shadow-[#adadad] rounded-lg p-5 mx-auto ">
                    <h2 className='text-4xl font-bold'>About Our Company</h2>
                    <p className='text-gray-700'>At Expert MDBS, we provide comprehensive medical billing and practice management solutions designed to help healthcare providers maximize revenue and minimize administrative burden. Our experienced team ensures accurate claim submission, timely follow-ups, and efficient denial management so that doctors and clinics can focus on patient care while we handle the financial processes. We are committed to transparency, reliability, and delivering results that improve the financial health of your practice.</p>
                    <div className="buttons flex justify-between w-[100%]">
                        <Link href={'/pages/services'} className='bg-[var(--bg1)] text-white text-xl px-3 py-2 flex items-center gap-2'> <IoClipboard />Our Services</Link>
                        <Link href={'/pages/contact'} className='bg-[var(--bg1)] text-white text-xl px-3 py-2 flex items-center gap-2'><GrContact />Contact US</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About