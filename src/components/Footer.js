'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#101722] text-gray-400">

      {/* ================= BRAND SECTION ================= */}
      <div className="border-b border-white/10 py-12">
        <div className="w-[90%] md:w-[60%] mx-auto text-center">
          <Image
            src="/logoDark.png"
            width={260}
            height={90}
            alt="ExpertMD Logo"
            className="mx-auto mb-5 w-[180px] md:w-[240px]"
          />
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            ExpertMD delivers reliable medical billing and revenue cycle
            management solutions that help healthcare providers improve
            efficiency, accuracy, and profitability.
          </p>
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="py-14">
        <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-white text-lg mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/pages/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/pages/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link href="/pages/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/pages/specialties" className="hover:text-white">Specialties</Link></li>
            </ul>
          </div>

          {/* Services */}
         <div>
  <h3 className="text-white text-lg mb-4">Services</h3>
  <ul className="flex flex-col gap-3 text-[15px] text-gray-300">
    <li>
      <Link href="/pages/services/layout3/training" className="hover:text-white transition-colors">
        Revenue Cycle Management
      </Link>
    </li>
    <li>
      <Link href="/pages/services/layout4/MedicalBilling" className="hover:text-white transition-colors">
        Medical Billing
      </Link>
    </li>
    <li>
      <Link href="/pages/services/layout1/emergencyresponse" className="hover:text-white transition-colors">
        Credentialing
      </Link>
    </li>
  </ul>
</div>


          {/* Specialties */}
          <div>
            <h3 className="text-white text-lg mb-4">Specialties</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/pages/specialties" className="hover:text-white">
                  Specialties Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
           <h3 className="text-white text-lg mb-4">Contact</h3>
<ul className="flex flex-col gap-3 text-sm">
  <li className="flex gap-2 items-start">
    <Phone size={16} className="mt-1 text-white" />
    <a
      href="tel:+15551234567"
      className="hover:text-white transition-colors"
    >
      +1 (555) 123-4567
    </a>
  </li>

  <li className="flex gap-2 items-start">
    <Mail size={16} className="mt-1 text-white" />
    <a
      href="mailto:support@expertmd.com"
      className="hover:text-white transition-colors"
    >
      support@expertmd.com
    </a>
  </li>

  <li className="flex gap-2 items-start">
    <MapPin size={16} className="mt-1 text-white" />
    <span>
    <a>  123 Healthcare Ave<br />
      New York, NY, USA</a>
    </span>
  </li>

  <li className="flex gap-2 items-start">
    <Clock size={16} className="mt-1 text-white" />
    <span><a>
      Mon–Fri: 9AM – 6PM</a></span>
  </li>
</ul>

          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#0A2240]">
        <p className="text-center text-white py-5 text-sm md:text-base">
          © 2025 ExpertMD Medical Billing Services. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
