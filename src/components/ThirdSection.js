'use client'
import React, { useRef } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { FaRecycle } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { motion, useInView } from "framer-motion";

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
      className="flex flex-col gap-6 items-center h-[100vh] justify-center sticky top-0 left-0 z-[-9]"
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
          <p>Reclaim</p>
          <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <FiRefreshCw className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl"
          variants={childVariants}
        >
          <p>Recycle</p>
          <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <FaRecycle className="text-8xl" />
          </div>
        </motion.div>
        <motion.div
          className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl"
          variants={childVariants}
        >
          <p>Treat</p>
          <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GrTest className="text-8xl" />
          </div>
        </motion.div>
      </motion.div>
      <motion.p
        className="text-3xl text-[var(--col1)] font-light"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        We are problem solvers
      </motion.p>
      <motion.h2
        className="text-5xl w-[60%] text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        Companies generate waste, which needs to be managed safely and efficiently.
      </motion.h2>
      <motion.p
        className="text-2xl text-gray-400 w-[50%] text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={childVariants}
      >
        At Heritage Environmental Services, we embrace the role of providing
        compliant waste management solutions to clients across the country.
        Check out our Services for more details.
      </motion.p>
    </div>
  );
};

export default ThirdSection;
