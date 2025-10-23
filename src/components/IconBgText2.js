import React from "react";
import { FaUserMd, FaHeartbeat, FaCertificate, FaRobot, FaCheckCircle } from "react-icons/fa";

const data = [
  {
    icon: <FaUserMd className="text-4xl sm:text-5xl md:text-6xl text-[var(--col1)]" />,
    text: "Trusted by 500+ physicians",
  },
  {
    icon: <FaHeartbeat className="text-4xl sm:text-5xl md:text-6xl text-[var(--col1)]" />,
    text: "Catering to 32+ specialties",
  },
  {
    icon: <FaCertificate className="text-4xl sm:text-5xl md:text-6xl text-[var(--col1)]" />,
    text: "1100+ certified medical billers and coders",
  },
  {
    icon: <FaRobot className="text-4xl sm:text-5xl md:text-6xl text-[var(--col1)]" />,
    text: "End-to-End Automated Billing Solution",
  },
  {
    icon: <FaCheckCircle className="text-4xl sm:text-5xl md:text-6xl text-[var(--col1)]" />,
    text: "Up to 98% First Pass Clean Claim Rate",
  },
];

const IconBgText2 = () => {
  return (
    <div className="bg-[var(--bg1)] text-white py-12 px-6 sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center p-5 sm:p-6 bg-[#334157] rounded-full border-4 sm:border-6 border-[var(--col1)]">
              {item.icon}
            </div>
            <p className="text-sm sm:text-base md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconBgText2;
