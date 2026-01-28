'use client'
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
        message: 'ExpertMd has helped us save countless hours and improve our bottom line. The team is friendly, professional, and always available to answer our questions.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png'
    },
    {
        name: 'Dr. Richard',
        job: 'Laboratory Manager',
        message: 'I used to dread our billing process, but since implementing ExpertMd, it has become much more manageable and efficient.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png'
    },
    {
        name: 'Dr. Susan',
        job: 'Laboratory Manager',
        message: 'ExpertMd helped us save time and improve accuracy in our billing coordination. Highly recommended for any lab!',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png'
    },
]

const About = () => {
    return (
        <div className="w-full">
            <PageBg 
                name={'About Us'} 
                short={'Expert MDBS is a trusted medical billing and practice management company helping healthcare providers streamline operations, maximize revenue, and focus on patient care.'} 
            />

            <div className="page flex flex-col gap-16 px-4 sm:px-6 lg:px-12 py-12">
                {/* Image + Text Sections */}
               
                {/* Testimonials */}
                <Testimonials data={testmonials} />

                {/* About Company Section */}
                <div className="aboutPageDetails w-full max-w-4xl flex flex-col gap-6 items-center text-center shadow-lg shadow-[#adadad] rounded-lg p-6 sm:p-10 mx-auto bg-white">
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>About Our Company</h2>
                    <p className='text-gray-700 text-base sm:text-lg md:text-xl'>
                        At Expert MDBS, we provide comprehensive medical billing and practice management solutions designed to help healthcare providers maximize revenue and minimize administrative burden. Our experienced team ensures accurate claim submission, timely follow-ups, and efficient denial management so that doctors and clinics can focus on patient care while we handle the financial processes. We are committed to transparency, reliability, and delivering results that improve the financial health of your practice.
                    </p>

                    <div className="buttons flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                       
                        <Link 
                            href={'/pages/contact'} 
                            className='bg-[var(--bg1)] text-white text-lg sm:text-xl px-4 py-2 flex items-center gap-2 rounded-md justify-center'
                        >
                            <GrContact /> Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
