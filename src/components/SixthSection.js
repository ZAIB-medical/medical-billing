'use client'
import React from 'react'
import { FaCircle } from "react-icons/fa";

const sixthSectionItems = [
  {
    name: 'Revenue Cycle Management',
    list: [
      { name: 'End-to-End RCM Management' },
      { name: 'Claim Submission & Tracking' },
      { name: 'Denial Management & Appeals' },
      { name: 'AR Follow-ups & Recovery' },
      { name: 'Payment Posting & Reporting' },
    ]
  },
  {
    name: 'Medical Billing Solutions',
    list: [
      { name: 'Professional & Facility Billing' },
      { name: 'Multi-Specialty Billing Support' },
      { name: 'Coding Review & Optimization' },
      { name: 'Clean Claim Rate Improvement' },
      { name: 'Monthly Performance Analytics' },
    ]
  },
  {
    name: 'Credentialing & Enrollment',
    list: [
      { name: 'CAQH Management' },
      { name: 'Insurance Panel Enrollment' },
      { name: 'Provider Credentialing' },
      { name: 'Re-validations & Maintenance' },
      { name: 'Contract Negotiation Support' },
    ]
  },
  {
    name: 'Practice Growth & Support',
    list: [
      { name: 'Eligibility & Benefits Verification' },
      { name: 'Patient Helpdesk & Scheduling' },
      { name: 'Telehealth Support' },
      { name: 'EHR/EMR Integration' },
      { name: 'Performance Consultation' },
    ]
  },
]

const SixthSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#eef4ff] text-black relative z-10 py-20 px-5 sm:px-10">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-[#6A98D0] text-2xl sm:text-3xl font-light">Complete Billing & RCM Support</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-snug">
          ExpertMD Delivers Full-Cycle Medical Billing Solutions
        </h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          A comprehensive suite of services designed to improve practice revenue,
          reduce claim denials, and speed up reimbursements.
        </p>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
        
        {sixthSectionItems.map((me, index) => (
          <div
            key={index}
            className="bg-[#0A2342] hover:bg-[#102E57] transition-all duration-300
                       p-8 rounded-2xl text-white shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">{me.name}</h2>
            <div className="h-1 w-14 bg-[#6A98D0] rounded-full mx-auto mb-5"></div>

            <div className="flex flex-col gap-3">
              {me.list.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-tight">
                  <FaCircle color="#6A98D0" className="text-[8px] mt-1 flex-shrink-0" /> 
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default SixthSection
