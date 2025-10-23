'use client'
import React from 'react'
import { GiAmbulance } from "react-icons/gi";      // Ambulatory
import { FaHospitalAlt } from "react-icons/fa";    // Hospital
import { GiTestTubes } from "react-icons/gi";      // Lab

const AddedSection = () => {
  return (
    <div
      className="min-h-screen relative z-10 flex flex-col gap-6 items-center pt-[15vh] px-4 sm:px-8"
      style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
    >
      {/* Section Title */}
      <p className="text-2xl sm:text-3xl text-[var(--col1)] font-light text-center">
        We specialize in precision care management
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center w-full sm:w-4/5 md:w-3/5">
        Ambulatory, Hospital, and Lab – expertly optimized
      </h2>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-400 text-center w-full sm:w-4/5 md:w-2/3">
        From fast-paced ambulatory services to large-scale hospital operations and critical lab diagnostics—our solutions are built to ensure accuracy, speed, and compliance. We help you deliver better outcomes, reduce claim denials, and accelerate reimbursements across all medical sectors.
      </p>

      {/* Icon Boxes */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-[5em] my-[4em] relative w-full items-center">
        <div className="bgline3boxes absolute w-full sm:w-[99vw] top-[60%] z-[-4] h-[10px]"></div>

        {/* Ambulatory */}
        <div className="flex flex-col gap-5 items-center text-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">Ambulatory</p>
          <div className="flex p-5 sm:p-[20px] border-8 sm:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiAmbulance className="text-5xl sm:text-8xl" />
          </div>
        </div>

        {/* Hospital */}
        <div className="flex flex-col gap-5 items-center text-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">Hospital</p>
          <div className="flex p-5 sm:p-[20px] border-8 sm:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <FaHospitalAlt className="text-5xl sm:text-8xl" />
          </div>
        </div>

        {/* Lab */}
        <div className="flex flex-col gap-5 items-center text-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">Lab</p>
          <div className="flex p-5 sm:p-[20px] border-8 sm:border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
            <GiTestTubes className="text-5xl sm:text-8xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddedSection
