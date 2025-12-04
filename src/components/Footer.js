'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footerLinks = [
  {
    title: "Company",
    links: [
      
      { name: "Contact Us", href: "/pages/contact" },
      { name: "Blogs", href: "/pages/blogs" },
      { name: "About Us", href: "/pages/about" },
    ]
  },
  {
    title: "Services",
    links: [
     { name: 'Revenue Cycle Management', href: '/pages/services/layout3/training' },
      { name: 'Medical Billing', href: '/pages/services/layout4/MedicalBilling' },
      { name: 'Medical Billing Consulting', href: '/pages/services/layout2/onsiteservices' },
      { name: 'Credentialing', href: '/pages/services/layout1/emergencyresponse' },
      { name: 'Medical Billing Small Practices', href: '/pages/services/layout5/SmallStepsMedical' },
      { name: 'Ar Recovery', href: '/pages/services/layout6/Ar' },
      { name: 'Hospital Billing', href: '/pages/services/layout7/HospitalBilling' },

    ]
  },
  
  {
    title: "Specialties",
    links: [
      { name: "Specialties Overview", href: "/pages/specialties" },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-[#101722] text-gray-400 pt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[90%] md:w-[70%] mx-auto">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-white text-lg mb-4">{section.title}</h3>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="w-[90%] md:w-[70%] mx-auto mt-10 flex justify-center md:justify-start">
        <Image
          src={'/logoDark.png'}
          width={300}
          height={100}
          alt="logo"
          className="h-auto w-[200px] md:w-[300px]"
        />
      </div>

      {/* Bottom */}
      <div className="bg-[#0A2240] mt-10">
        <p className="text-center text-white py-5 text-sm md:text-base">
          © 2025 ExpertMD Medical Billing Services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
