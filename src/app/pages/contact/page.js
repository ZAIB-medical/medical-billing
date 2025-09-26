import PageBg from '@/components/PageBg'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from '@/components/forms/ContactForm';
import Link from 'next/link';

const Contact = () => {
    return (
        <div>
            <PageBg
                name={'Contact Us'}
                short={'Get in touch with us for any inquiries, support, or collaboration opportunities.'}
            />
            <div className="page">
                <div className="ConatctDetailBoxes flex justify-center gap-[5vw]">
                    
                    <Link href={'tel:+923030482616'} className="contactSingleBox">
                        <div className="iconContact"><FaPhoneAlt /></div>
                        <div>
                            <h2>Call Us :</h2>
                            <p>+92 303 0482616</p>
                        </div>
                    </Link>

                    <Link href={'mailto:info@expertmdbs.com'} className="contactSingleBox">
                        <div className="iconContact"><IoMailSharp /></div>
                        <div>
                            <h2>Mail Us :</h2>
                            <p>info@expertmdbs.com</p>
                        </div>
                    </Link>

                    <Link
                        href={'https://maps.app.goo.gl/L3Wjva54KDsNfaeY9'}
                        className="contactSingleBox"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="iconContact"><FaMapMarkedAlt /></div>
                        <div>
                            <h2>Address :</h2>
                            <p>Office #3, 2nd Floor, XYZ Plaza, Lahore, Pakistan</p>
                        </div>
                    </Link>
                </div>

                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
