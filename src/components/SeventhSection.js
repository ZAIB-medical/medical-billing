import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const medicalBillingPosts = [
  {
    title: "AI-Powered Claim Processing",
    description: "Our new AI module accelerates claim submissions, detects errors before rejection, and improves reimbursement turnaround time.",
    date: "Nov 11th, 2024",
    img: "https://www.healthcarefinancenews.com/sites/healthcarefinancenews.com/files/healthcaretech_1.jpg"
  },
  {
    title: "CMS Releases 2025 Billing Guidelines",
    description: "Learn about the latest updates from the Centers for Medicare & Medicaid Services and how they affect your practice billing.",
    date: "Dec 1st, 2024",
    img: "https://www.rcmt.com/blog/wp-content/uploads/2022/07/medical-billing-updates.jpg"
  },
  {
    title: "Denial Management Best Practices",
    description: "Explore strategies to minimize claim denials, track payer patterns, and improve your clean claim rate by 25%.",
    date: "Jan 5th, 2025",
    img: "https://www.mbill.com/wp-content/uploads/2021/04/claims-denial-management.jpg"
  },
  {
    title: "Telehealth Billing Simplified",
    description: "With telemedicine expanding, our platform helps practices ensure compliance and accurate telehealth charge capture.",
    date: "Feb 15th, 2025",
    img: "https://www.zollege.com/blog/wp-content/uploads/2023/03/Telehealth-Feature-Image.jpg"
  },
  {
    title: "Revenue Cycle Optimization",
    description: "End-to-end automation and analytics tools to enhance your revenue cycle performance and streamline cash flow.",
    date: "Mar 20th, 2025",
    img: "https://www.3genconsulting.com/wp-content/uploads/2023/06/revenue-cycle-management.jpg"
  },
  {
    title: "HIPAA Compliance Checklist 2025",
    description: "Stay ahead of new HIPAA requirements — our updated compliance guide ensures secure patient data handling.",
    date: "Apr 25th, 2025",
    img: "https://www.hipaajournal.com/wp-content/uploads/2020/06/HIPAA-Compliance-Checklist.jpg"
  }
];

const SeventhSection = () => {
  return (
    <div 
      className="min-h-screen text-white relative z-10 flex flex-col gap-12 justify-center items-center py-16"
      style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
    >
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center gap-5 w-[80%] text-center">
        <p className="text-3xl text-[var(--col1)]">Industry Insights</p>
        <h2 className="text-4xl sm:text-5xl">Latest News in Medical Billing & Healthcare</h2>
        <Link className="flex gap-3 items-center text-xl sm:text-2xl" href={'/'}>
          View All Articles <FaArrowRightLong />
        </Link>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] px-5">
        {medicalBillingPosts.map((post, index) => (
          <div
            key={index}
            className="group text-white bg-center bg-cover bg-no-repeat rounded-lg shadow-lg w-full h-[300px] overflow-hidden flex justify-center items-end"
            style={{ backgroundImage: `url(${post.img})` }}
          >
            {/* Hover Overlay */}
<div className="p-4 bg-[#000000a0] h-full flex flex-col justify-center items-center gap-5 transition duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm sm:text-base mb-4 text-center">{post.description}</p>
              <Link href="/" className="text-white px-4 py-2 bg-[#6A98D0] rounded-md text-lg flex items-center gap-2">
                Read More <FaArrowRightLong />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeventhSection;
