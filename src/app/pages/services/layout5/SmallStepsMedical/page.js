"use client";
import React from "react";
import PageBg2 from "@/components/PageBg2";
import Testimonials from "@/components/Testimonials";

const Page = () => {
  // ✅ Testimonials
  const testimonials = [
    {
      name: "Dr. Emily Carter",
      job: "Family Practice",
      message:
        "We moved from in-house billing to ExpertMD Small Practice Billing, and our reimbursements increased by 35% in 3 months.",
      img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png",
    },
    {
      name: "Dr. Michael Thompson",
      job: "Pediatrics Clinic",
      message:
        "Their team understands small practices. Clean claims, correct coding, and zero headaches!",
      img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png",
    },
    {
      name: "Dr. Karen Wright",
      job: "Solo Practitioner",
      message:
        "Affordable, accurate, and extremely supportive. The perfect solution for solo doctors.",
      img: "https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png",
    },
  ];

  // ✅ Icon Cards
  const iconCards = [
    {
      name: "Affordable Pricing",
      desc: "Designed for solo doctors & small teams – no hidden costs, no long-term commitments.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Layer_1.svg",
    },
    {
      name: "Faster Reimbursements",
      desc: "Claim scrubbing + coding accuracy = quicker payments for your practice.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39894-1.svg",
    },
    {
      name: "Zero Claim Denials",
      desc: "We reduce denials by up to 80% with correct documentation and submission workflows.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39895.svg",
    },
    {
      name: "Dedicated Support",
      desc: "Small practices get a dedicated account manager for billing and reporting.",
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
          title="Medical Billing for Small Practices"
          desc="ExpertMD provides end-to-end medical billing services tailored specifically for small practices and solo providers. We help you stay profitable without hiring an in-house billing team."
          img="https://transcure.net/wp-content/uploads/2024/11/8222333963.webp"
        />

        <TextSimple
          title="Why Small Practices Trust Us"
          desc="We understand the unique challenges small practices face—limited staff, tighter budgets, and the need for accurate reimbursements. Our team ensures smooth claim management, faster payments, and complete financial transparency."
        />

        <Section
          reverse
          title="Stress-Free Billing & Coding"
          desc="From eligibility verification to AR follow-ups, our certified billers manage everything so you can focus only on patient care."
          img="https://transcure.net/wp-content/uploads/2024/11/image-1.webp"
        />

        <Section
          title="Improve Patient Flow & Cash Flow"
          desc="Our system ensures faster claim cycles, fewer denials, and streamlined billing operations—helping your practice grow consistently."
          img="https://transcure.net/wp-content/uploads/2024/11/e7195bef2c.webp"
        />

        <BoxesPart data={iconCards} />

        <Testimonials data={testimonials} />
      </div>
    </div>
  );
};

export default Page;
