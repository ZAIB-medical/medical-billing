'use client'
import PageBg from '@/components/PageBg'
import React from 'react'
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import ContactForm from '@/components/forms/ContactForm';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className="w-full">
            {/* Page Banner */}
            <PageBg
                name={'Contact Us'}
                short={'Get in touch with us for any inquiries, support, or collaboration opportunities.'}
            />

            <div className="page flex flex-col items-center gap-12 px-4 sm:px-6 lg:px-12 py-12">
                {/* Contact Detail Boxes */}
                <div className="ConatctDetailBoxes flex flex-col sm:flex-row justify-center gap-6 sm:gap-[5vw] w-full max-w-6xl">
                    
                    {/* Call */}
                    <Link href={'tel:+923030482616'} className="contactSingleBox flex items-center gap-4 p-6 rounded-xl bg-[#0a2342] text-white hover:bg-[#1e2b3d] transition-all duration-300 w-full sm:w-auto">
                        <div className="iconContact text-3xl sm:text-4xl text-[var(--col1)]"><FaPhoneAlt /></div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">Call Us :</h2>
                            <p className="text-sm sm:text-base">+92 303 0482616</p>
                        </div>
                    </Link>

                    {/* Mail */}
                    <Link href={'mailto:info@expertmdbs.com'} className="contactSingleBox flex items-center gap-4 p-6 rounded-xl bg-[#0a2342] text-white hover:bg-[#1e2b3d] transition-all duration-300 w-full sm:w-auto">
                        <div className="iconContact text-3xl sm:text-4xl text-[var(--col1)]"><IoMailSharp /></div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">Mail Us :</h2>
                            <p className="text-sm sm:text-base">info@expertmdbs.com</p>
                        </div>
                    </Link>

                    {/* Address */}
                    <Link
                        href={'https://maps.app.goo.gl/L3Wjva54KDsNfaeY9'}
                        className="contactSingleBox flex items-center gap-4 p-6 rounded-xl bg-[#0a2342] text-white hover:bg-[#1e2b3d] transition-all duration-300 w-full sm:w-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="iconContact text-3xl sm:text-4xl text-[var(--col1)]"><FaMapMarkedAlt /></div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">Address :</h2>
                            <p className="text-sm sm:text-base">Office #3, 2nd Floor, XYZ Plaza, Lahore, Pakistan</p>
                        </div>
                    </Link>
                </div>

                {/* Contact Form */}
                <div className="w-full max-w-6xl">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact
