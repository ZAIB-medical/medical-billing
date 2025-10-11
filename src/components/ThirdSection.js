'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GiMicroscope } from "react-icons/gi";  // Pathology
import { GiCancer } from "react-icons/gi";      // Oncology
import { FaAllergies } from "react-icons/fa";    // Dermatology alternative

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
      className="flex flex-col gap-6 items-center py-[6em] justify-center relative z-[1]"
      style={{ background: "linear-gradient(to right, #0a2342, #101722)" }}
    >
      <motion.div
        className="3BoxesSecondSection flex justify-center gap-[5em] my-[4em] relative"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl"
          variants={childVariants}
        >
          <p>Pathology</p>
          <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiMicroscope className="text-8xl" />
          </div>
        </motion.div>

        <motion.div
          className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl"
          variants={childVariants}
        >
          <p>Dermatology</p>
          <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <FaAllergies className="text-8xl" />
          </div>
        </motion.div>

        <motion.div
          className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl"
          variants={childVariants}
        >
          <p>Oncology</p>
          <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiCancer className="text-8xl" />
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-3xl text-[var(--col1)] font-light"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        Our Specialties
      </motion.p>

      <motion.h2
        className="text-5xl w-[60%] text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        Tailored Medical Billing Services For Your Practice.
      </motion.h2>

      <motion.p
        className="text-2xl text-gray-400 w-[50%] text-center"
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
