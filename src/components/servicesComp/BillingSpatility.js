'use client'
import React from 'react'
import {
  FaCalendarCheck,      // Appointment Scheduling
  FaUserCheck,          // Patient Registration
  FaClipboardCheck,     // Eligibility & Benefits
  FaChartLine,          // Utilization Review
  FaFileSignature,      // Referral Authorization
  FaPaperPlane,         // Claims Submission
  FaMoneyCheckAlt,      // Payment Posting
  FaExclamationCircle,  // Denial Management
  FaPhoneVolume          // A/R Follow-Up
} from 'react-icons/fa'

const data = [
  {
    icon: <FaCalendarCheck className="text-5xl text-[var(--col1)]" />,
    name: 'Appointment Scheduling',
    desc: 'Streamline patient flow with intelligent scheduling that minimizes no-shows, improves resource utilization, and enhances patient satisfaction.'
  },
  {
    icon: <FaUserCheck className="text-5xl text-[var(--col1)]" />,
    name: 'Patient Registration',
    desc: 'Ensure accurate and complete patient information capture to eliminate claim delays and reduce rework in your billing cycle.'
  },
  {
    icon: <FaClipboardCheck className="text-5xl text-[var(--col1)]" />,
    name: 'Eligibility & Benefits Verification',
    desc: 'Automate eligibility checks and benefits validation to confirm coverage before visits and reduce claim denials.'
  },
  {
    icon: <FaChartLine className="text-5xl text-[var(--col1)]" />,
    name: 'Utilization Review',
    desc: 'Track medical necessity, prevent overutilization, and ensure compliance with payer requirements through real-time utilization review.'
  },
  {
    icon: <FaFileSignature className="text-5xl text-[var(--col1)]" />,
    name: 'Referral Authorization',
    desc: 'Simplify and automate prior authorization and referral workflows to improve turnaround and patient access to care.'
  },
  {
    icon: <FaPaperPlane className="text-5xl text-[var(--col1)]" />,
    name: 'Claims Submission',
    desc: 'Accelerate claim submissions with automated validation and clearinghouse integrations to reduce errors and rejections.'
  },
  {
    icon: <FaMoneyCheckAlt className="text-5xl text-[var(--col1)]" />,
    name: 'Payment Posting',
    desc: 'Automated payment posting ensures timely reconciliation, transparency, and accurate revenue tracking for every encounter.'
  },
  {
    icon: <FaExclamationCircle className="text-5xl text-[var(--col1)]" />,
    name: 'Denial Management',
    desc: 'Identify, categorize, and resolve denials proactively with AI-powered analytics that reveal payer patterns and root causes.'
  },
  {
    icon: <FaPhoneVolume className="text-5xl text-[var(--col1)]" />,
    name: 'A/R Follow-Up',
    desc: 'Ensure timely follow-up on unpaid claims with intelligent tracking and automated alerts to improve collections and cash flow.'
  }
]

const BillingSpeciality = () => {
  return (
    <div 
      className="w-[90%] mx-auto my-[5em] text-center flex flex-col gap-[2em]"
      style={{ background: 'linear-gradient(to right, #0a2342, #101722)', borderRadius: '20px', padding: '3em 0' }}
    >
      <h2 className="text-4xl font-bold text-[var(--col1)]">Medical Billing Specialties</h2>
      <p className="text-lg text-gray-300 w-[70%] mx-auto">
        Transcure’s mission is to make a difference in healthcare by delivering 
        high-quality RCM solutions that empower practices to optimize financial performance, 
        improve patient satisfaction, and ensure compliance across all medical specialties.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2em] w-[80%] mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#1e2b3d] hover:bg-[#2d3b54] rounded-xl shadow-md p-6 flex flex-col items-center gap-4 text-center transition-all duration-300 hover:scale-[1.05] hover:shadow-xl cursor-pointer overflow-hidden"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-[var(--col1)]">{item.name}</h3>
            <p className="text-gray-300 text-base opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BillingSpeciality
