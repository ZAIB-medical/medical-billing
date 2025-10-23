'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GiMicroscope, GiCancer } from "react-icons/gi";  // Pathology & Oncology
import { FaAllergies } from "react-icons/fa";             // Dermatology alternative

const ThirdSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { triggerOnce: false, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col gap-6 items-center py-[6em] justify-center relative z-[1] px-4 sm:px-8 md:px-16"
      style={{ background: "linear-gradient(to right, #0a2342, #101722)" }}
    >
      {/* 3 Boxes */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[5em] my-16 w-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Pathology */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-5 items-center text-2xl sm:text-3xl md:text-3xl"
          variants={childVariants}
        >
          <p className="font-medium text-center">Pathology</p>
          <div className="flex p-6 sm:p-8 md:p-[20px] border-[6px] sm:border-[8px] md:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiMicroscope className="text-5xl sm:text-7xl md:text-8xl" />
          </div>
        </motion.div>

        {/* Dermatology */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-5 items-center text-2xl sm:text-3xl md:text-3xl"
          variants={childVariants}
        >
          <p className="font-medium text-center">Dermatology</p>
          <div className="flex p-6 sm:p-8 md:p-[20px] border-[6px] sm:border-[8px] md:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <FaAllergies className="text-5xl sm:text-7xl md:text-8xl" />
          </div>
        </motion.div>

        {/* Oncology */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-5 items-center text-2xl sm:text-3xl md:text-3xl"
          variants={childVariants}
        >
          <p className="font-medium text-center">Oncology</p>
          <div className="flex p-6 sm:p-8 md:p-[20px] border-[6px] sm:border-[8px] md:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiCancer className="text-5xl sm:text-7xl md:text-8xl" />
          </div>
        </motion.div>
      </motion.div>

      {/* Section Title */}
      <motion.p
        className="text-2xl sm:text-3xl text-[var(--col1)] font-light"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        Our Specialties
      </motion.p>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl w-full sm:w-4/5 md:w-3/5 text-center font-semibold"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        Tailored Medical Billing Services For Your Practice.
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-gray-400 w-full sm:w-4/5 md:w-1/2 text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        Our robust medical billing KPIs are measurable, specific, and aligned with your practice’s financial goals.
      </motion.p>
    </div>
  );
};

export default ThirdSection;
