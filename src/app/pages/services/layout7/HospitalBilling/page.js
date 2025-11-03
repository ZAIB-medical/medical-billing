"use client";
import React from "react";
import PageBg2 from "@/components/PageBg2";
import Testimonials from "@/components/Testimonials";

const Page = () => {
  // ✅ Testimonials
  const testimonials = [
    {
      name: "Dr. Olivia Carter",
      job: "Hospital Administrator",
      message:
        "Their hospital billing service transformed our entire reimbursement system. Clean claims, fast payments, and outstanding compliance.",
      img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png",
    },
    {
      name: "Dr. Samuel Wright",
      job: "Chief Medical Officer",
      message:
        "We used to struggle with delays and compliance issues. ExpertMD's hospital billing team fixed our workflow completely.",
      img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png",
    },
    {
      name: "Dr. Megan Hill",
      job: "Revenue Director",
      message:
        "Our hospital AR was out of control until we partnered with ExpertMD. Today our cash flow is stable and consistent.",
      img: "https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png",
    },
  ];

  // ✅ Icon Cards
  const iconCards = [
    {
      name: "Inpatient & Outpatient Billing",
      desc: "Accurate billing for emergency, inpatient, outpatient, surgery, and specialty departments.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Layer_1.svg",
    },
    {
      name: "UB-04 Claims Processing",
      desc: "End-to-end preparation and submission of UB-04 hospital claims with complete accuracy.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39894-1.svg",
    },
    {
      name: "DRG & APC Coding",
      desc: "Precise DRG and APC coding to ensure hospitals receive the correct reimbursement for services.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39895.svg",
    },
    {
      name: "Insurance Verification",
      desc: "Real-time insurance eligibility verification to avoid claim denials and improve approval rates.",
      img: "https://transcure.net/wp-content/uploads/2024/11/Group-39896.svg",
    },
  ];

  // ✅ Section Component
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
          title="Hospital Billing Services – Streamline Your Revenue Cycle"
          desc="ExpertMD provides complete hospital billing services designed to optimize reimbursement, reduce denials, and improve financial performance. From emergency services to surgery billing, our team ensures accurate coding and compliant claim submission."
          img="https://transcure.net/wp-content/uploads/2024/11/8222333963.webp"
        />

        <TextSimple
          title="Enhance Cash Flow With Accurate Billing"
          desc="Hospital billing is complex, involving multiple departments and service lines. Our experts simplify the process with structured workflows, automated checks, and real-time monitoring to ensure faster reimbursements."
        />

        <Section
          reverse
          title="Complete UB-04 Claim Management"
          desc="We handle the entire UB-04 claim lifecycle — from data validation and coding to submission, follow-up, and payment posting, ensuring hospitals receive maximum reimbursement with minimal delays."
          img="https://transcure.net/wp-content/uploads/2024/11/image-1.webp"
        />

        <Section
          title="Error-Free DRG & APC Coding"
          desc="Accurate DRG and APC assignment ensures reimbursement accuracy. Our certified coders apply the correct classifications, modifiers, and documentation to prevent errors and reduce denials."
          img="https://transcure.net/wp-content/uploads/2024/11/e7195bef2c.webp"
        />

        <BoxesPart data={iconCards} />

        <Testimonials data={testimonials} />
      </div>
    </div>
  );
};

export default Page;
