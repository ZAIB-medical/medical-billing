"use client";
import React from "react";
import PageBg2 from "@/components/PageBg2";
import Testimonials from "@/components/Testimonials";

const ARServicesPage = () => {
  // ✅ Testimonials
  const testimonials = [
    {
      name: "Dr. Jonathan Reed",
      job: "Internal Medicine",
      message:
        "Their AR team reduced our outstanding accounts by 60% in the first two months. Exceptional follow-up and very professional.",
      img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png",
    },
    {
      name: "Dr. Amelia Scott",
      job: "Cardiology Clinic",
      message:
        "We had a huge backlog of pending claims. ExpertMD’s AR experts cleaned the entire AR in record time. Amazing accuracy!",
      img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png",
    },
    {
      name: "Dr. Andrew Miller",
      job: "Multi-Specialty Group",
      message:
        "Their AR follow-up is strong, consistent, and highly professional. Our reimbursements have improved dramatically.",
      img: "https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png",
    },
  ];

  // ✅ Icon Cards
  const iconCards = [
    {
      name: "90+ Days AR Cleanup",
      desc: "We aggressively target aging AR and recover revenue that would otherwise be lost.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Layer_1.svg",
    },
    {
      name: "Denial Management",
      desc: "We identify denial trends, fix coding issues, and prevent future claim denials.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39894-1.svg",
    },
    {
      name: "Claim Follow-Up",
      desc: "Our AR specialists consistently follow up with payers until every claim is resolved.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39895.svg",
    },
    {
      name: "Revenue Recovery",
      desc: "Improve cash flow with a proven recovery strategy for unpaid, denied, and underpaid claims.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39896.svg",
    },
  ];

  // ✅ L2R Component (inline)
  const Section = ({ title, desc, img, reverse = false }) => (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 my-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        src={img}
        alt={title}
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-[#202D42]">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  );

  // ✅ Simple Text Component
  const TextSimple = ({ title, desc }) => (
    <div className="my-16 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#202D42] mb-4">{title}</h2>
      <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
    </div>
  );

  // ✅ Boxes Component
  const BoxesPart = ({ data }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {data.map((card, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all text-center"
        >
          <img src={card.img} alt={card.name} className="w-16 mx-auto mb-4" />
          <h3 className="font-semibold text-xl text-[#202D42] mb-2">
            {card.name}
          </h3>
          <p className="text-gray-600">{card.desc}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <PageBg2 img="https://cloud.appwrite.io/v1/storage/buckets/6798a41d001fa41e179c/files/6798c0df001975dd21dc/view?project=6794f195002eec77bf76" />

      <div className="page px-4 md:px-0 max-w-7xl mx-auto">
        <Section
          title="AR Services – Accelerate Your Cash Flow"
          desc="ExpertMD provides complete AR (Accounts Receivable) management to help practices recover unpaid claims, reduce denials, and improve financial performance. Our AR experts work like an extension of your team, ensuring no dollar is left behind."
          img="https://transcure.net/wp-content/uploads/2024/11/8222333963.webp"
        />

        <TextSimple
          title="Fix Revenue Leakage & Reduce Backlogs"
          desc="Most practices lose revenue because of unpaid claims, poor follow-up, and unresolved denials. Our dedicated AR specialists proactively track every outstanding claim, prevent delays, and ensure timely reimbursements."
        />

        <Section
          reverse
          title="Strong Payer Follow-Up"
          desc="We perform continuous payer follow-ups, appeal rejected claims, resolve underpaid claims, and make sure you get paid the amount you deserve."
          img="https://transcure.net/wp-content/uploads/2024/11/image-1.webp"
        />

        <Section
          title="Minimize Denials with Root-Cause Correction"
          desc="Our advanced denial analytics finds the root cause of recurring issues—whether it's coding errors, missing documents, or incorrect modifiers—so future claims are submitted clean and accurate."
          img="https://transcure.net/wp-content/uploads/2024/11/e7195bef2c.webp"
        />

        <BoxesPart data={iconCards} />

        <Testimonials data={testimonials} />
      </div>
    </div>
  );
};

export default ARServicesPage;
