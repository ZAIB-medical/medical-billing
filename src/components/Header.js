'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";


const topLinks1 = [
    {
        name: 'Join Our Team',
        href: 'joinourteam',
    },
    {
        name: 'Contact Us',
        href: 'contactus',
    },
    {
        name: 'Environmental Compliance Training',
        href: 'environmentalcompliancetraining',
    },
    {
        name: 'E-Manifest',
        href: 'emanifest',
    },
]
const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Services',
        href: '/pages/services',
        links: [
            {
                name: 'Waste Transportation, Treatment, & Disposal',
                href: '/pages/services/layout1/wastetransportationtreatmentdisposal',
            },
            {
                name: 'Technical Solutions',
                href: '/pages/services/layout2/technicalsolutions',
            },
            {
                name: 'Onsite Services',
                href: '/pages/services/layout2/onsiteservices',
            },
            {
                name: 'Emergency Response',
                href: '/pages/services/layout1/emergencyresponse',
            },
            {
                name: 'Environmental Compliance Training',
                href: '/pages/services/layout3/training',
            },
            {
                name: 'Onsite Services',
                href: '/pages/services/layout3/onsiteservices',
            },
            {
                name: 'Demilitarization',
                href: '/pages/services/layout3/demilitarization',
            },
        ]
    },
    {
        name: 'Specialties',
        href: '/pages/specialties',
    },
    {
        name: 'About Us',
        href: '/pages/about',
        ref: 'training',
           

    },
    {
        name: 'Contact Us',
        href: '/pages/contact',
    },
    {
        name: 'Blogs',
        href: '/pages/blogs',
    },
]

const Header = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        // Duplicate content for seamless scrolling
        const duplicateContent = () => {
            const originalContent = slider.innerHTML;
            slider.innerHTML += originalContent; // Append duplicate content
        };

        duplicateContent();

        let scrollPosition = 0;

        const scrollLeft = () => {
            if (slider) {
                scrollPosition += 1; // Adjust this value for scroll speed
                slider.scrollLeft = scrollPosition;

                // Reset scroll position to create a seamless loop
                if (scrollPosition >= slider.scrollWidth / 2) {
                    scrollPosition = 0;
                }
            }
        };

        const scrollInterval = setInterval(scrollLeft, 10); // Adjust interval for smoother or faster scrolling

        return () => clearInterval(scrollInterval); // Cleanup on component unmount
    }, []);

    return (
        <>
            <div className="header-wrapper overflow-hidden bg-[#202D42] text-white h-12 flex items-center ">
                <div
                    className="slider flex gap-8 whitespace-nowrap items-center"
                    ref={sliderRef}
                >
                    <div className="flex items-center gap-2 px-4">
                        <p>We are changing the delivery method for your completed manifests.</p>
                        <Link href={'/'}>Learn more</Link>
                    </div>
                    <div className="flex items-center px-4">
                        <p>Heritage is now hiring in the positions of Drivers, Material Handlers, Lab Chemists and more.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                        <p>2023 Sustainability Report is now available.</p>
                        <Link href={'/'}>Click here to view.</Link>
                    </div>
                </div>
            </div>
            <div className="2ndSectionHeader bg-[#101722] flex p-3 justify-end text-sm gap-4 items-center">
                <div className="leftHeader2nd flex gap-4">
                    {
                        topLinks1.map((me, index) => (
                            <Link className='border-r-2 pr-4 text-gray-400 border-gray-400' key={index} href={me.href}>{me.name}</Link>
                        ))
                    }
                </div>
                <div className="rightHeader2nd text-3xl flex gap-4">
                    <Link href={'/'}><FaFacebook /></Link>
                    <Link href={'/'}><FaSquareInstagram /></Link>
                    <Link href={'/'}><FaLinkedin /></Link>
                </div>
            </div>
            <div className='sticky top-0 z-50'>
                <div>
                    <div className="mainStickyHeader bg-[#101722]">
                        <div className="logo">
                            <Image src={'/logoDark.png'} width={500} height={500} alt='logo' className='h-auto w-[300px]' />
                        </div>
                        <div className="menuItems flex gap-5">
                            {menuItems.map((me, index) => (
                                <div className="max-w-max group relative" key={index}>
                                    <Link href={me.href} className="relative text-white">
                                        {me.name}
                                        <div className="lineMenu w-0 h-[2px] bg-[#6A98D0] mt-3 absolute left-0 bottom-0 transition-all duration-300 group-hover:w-full"></div>
                                    </Link>
                                    {me.links && (
                                        <div className="absolute left-0 w-[300px] top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col bg-[#202D42] text-white rounded-md shadow-lg z-10 transition duration-200">
                                        {me.links.map((link, subIndex) => (
                                          <Link
                                            key={subIndex}
                                            href={link.href}
                                            className="px-4 py-2 hover:bg-[#ffffff] transition-colors"
                                          >
                                            {link.name}
                                          </Link>
                                        ))}
                                      </div>
                                      
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="buttonRightMenu">
                            <button className='bg-[#6A98D0] text-white gap-2 flex items-center px-4 py-2 text-lg'>
                                Quick Connect <MdAddLocationAlt className='text-2xl' />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;
