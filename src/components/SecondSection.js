import React from 'react'
import { GiStomach, GiBrain, GiLungs } from "react-icons/gi";

const SecondSection = () => {
  return (
    <div 
      className="min-h-screen relative z-10 flex flex-col gap-6 items-center pt-[15vh] px-4 sm:px-8 md:px-16" 
      style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
    >
      {/* Section Title */}
      <p className="text-2xl sm:text-3xl text-[var(--col1)] font-light">We are problem solvers</p>
      <h2 className="text-3xl sm:text-5xl md:text-5xl w-full sm:w-4/5 md:w-3/5 text-center font-semibold">
        Our key performance indicators
      </h2>
      <p className="text-lg sm:text-2xl md:text-2xl text-gray-400 w-full sm:w-4/5 md:w-1/2 text-center">
        Our robust medical billing KPIs are measurable, specific, and aligned with your practice’s financial goals. The results? Accurate claim transmissions, better patient care, and faster reimbursements.
      </p>

      {/* 3 Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-[5em] gap-10 my-16 relative w-full">
        {/* Horizontal line */}
        <div className="bgline3boxes absolute w-full md:w-[99vw] top-[50%] md:top-[60%] z-[-4] h-[6px] md:h-[10px]"></div>

        {/* Gastroenterology */}
        <div className="flex flex-col gap-5 items-center text-2xl sm:text-3xl md:text-3xl">
          <p className="font-medium text-center">Gastroenterology</p>
          <div className="flex p-6 sm:p-8 md:p-[20px] border-[6px] sm:border-[8px] md:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiStomach className="text-5xl sm:text-7xl md:text-8xl" />
          </div>
        </div>

        {/* Neurosurgery */}
        <div className="flex flex-col gap-5 items-center text-2xl sm:text-3xl md:text-3xl">
          <p className="font-medium text-center">Neurosurgery</p>
          <div className="flex p-6 sm:p-8 md:p-[20px] border-[6px] sm:border-[8px] md:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiBrain className="text-5xl sm:text-7xl md:text-8xl" />
          </div>
        </div>

        {/* Thoracic */}
        <div className="flex flex-col gap-5 items-center text-2xl sm:text-3xl md:text-3xl">
          <p className="font-medium text-center">Thoracic</p>
          <div className="flex p-6 sm:p-8 md:p-[20px] border-[6px] sm:border-[8px] md:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiLungs className="text-5xl sm:text-7xl md:text-8xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection;
