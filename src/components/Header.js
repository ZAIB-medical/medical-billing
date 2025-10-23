'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdAddLocationAlt } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/pages/services',
    links: [
      { name: 'Revenue Cycle Management', href: '/pages/services/layout3/training' },
      { name: 'Medical Billing', href: '/pages/services/layout2/technicalsolutions' },
      { name: 'Medical Billing Consulting', href: '/pages/services/layout2/onsiteservices' },
      { name: 'Credentialing', href: '/pages/services/layout1/emergencyresponse' },
      { name: 'Medical Billing Small Practices', href: '/pages/services/layout3/training' },
      { name: 'Ar Recovery', href: '/pages/services/layout3/onsiteservices' },
      { name: 'Hospital Billing', href: '/pages/services/layout3/demilitarization' },
    ]
  },
  { name: 'Specialties', href: '/pages/specialties' },
  { name: 'About Us', href: '/pages/about' },
  { name: 'Contact Us', href: '/pages/contact' },
  { name: 'Blogs', href: '/pages/blogs' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-scrolling top slider without ref
  useEffect(() => {
    const slider = document.querySelector('.top-slider');
    if (!slider) return;

    // Duplicate content
    slider.innerHTML += slider.innerHTML;

    let scrollPosition = 0;
    const interval = setInterval(() => {
      scrollPosition += 1;
      slider.scrollLeft = scrollPosition;
      if (scrollPosition >= slider.scrollWidth / 2) scrollPosition = 0;
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Scrolling Header */}
      <div className="header-wrapper hidden sm:flex overflow-hidden bg-[#202D42] text-white h-12 items-center px-4 text-sm">
        <div className="top-slider flex gap-8 whitespace-nowrap items-center">
          <div className="flex items-center gap-2 px-4">
            <p>We are changing the delivery method for your completed manifests.</p>
            <Link href={'/'} className="underline">Learn more</Link>
          </div>
          <div className="flex items-center px-4">
            <p>Heritage is now hiring in the positions of Drivers, Material Handlers, Lab Chemists and more.</p>
          </div>
          <div className="flex items-center gap-2 px-4">
            <p>2023 Sustainability Report is now available.</p>
            <Link href={'/'} className="underline">Click here to view.</Link>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <div className="sticky top-0 z-50 bg-[#101722] shadow-md">
        <div className="flex justify-between items-center p-3 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <img
                src="/logoDark.png"
                alt="logo"
                className="w-[180px] sm:w-[300px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 items-center">
            {menuItems.map((me, index) => (
              <div className="relative group" key={index}>
                <Link href={me.href} className="relative text-white px-2 py-1">
                  {me.name}
                  <div className="lineMenu w-0 h-[2px] bg-[#6A98D0] mt-1 absolute left-0 bottom-0 transition-all duration-300 group-hover:w-full"></div>
                </Link>
                {me.links && (
                  <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col bg-[#202D42] text-white rounded-md shadow-lg z-10 transition duration-200 min-w-[250px]">
                    {me.links.map((link, subIndex) => (
                      <Link key={subIndex} href={link.href} className="px-4 py-2 hover:bg-[#6A98D0] transition-colors rounded">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden md:block">
            <button className="bg-[#6A98D0] text-white gap-2 flex items-center px-4 py-2 text-lg rounded">
              Quick Connect <MdAddLocationAlt className="text-2xl" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX className="text-white text-3xl" /> : <HiMenu className="text-white text-3xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#202D42] text-white flex flex-col p-4 gap-2">
            {menuItems.map((me, index) => (
              <div key={index} className="flex flex-col">
                <Link href={me.href} className="py-2 px-2 hover:bg-[#6A98D0] rounded">{me.name}</Link>
                {me.links && (
                  <div className="ml-4 flex flex-col">
                    {me.links.map((link, subIndex) => (
                      <Link key={subIndex} href={link.href} className="py-1 px-2 hover:bg-[#6A98D0] rounded">{link.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-[#6A98D0] text-white gap-2 flex items-center px-4 py-2 text-lg mt-2 rounded">
              Quick Connect <MdAddLocationAlt className="text-2xl" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
