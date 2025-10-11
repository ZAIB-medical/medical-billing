import React from 'react'
import { GiAmbulance } from "react-icons/gi";      // Ambulatory
import { FaHospitalAlt } from "react-icons/fa";    // Hospital
import { GiTestTubes } from "react-icons/gi";      // Lab

const AddedSection = () => {
  return (
<div 
  className="min-h-screen relative z-10 flex flex-col gap-6 items-center pt-[15vh]" 
  style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
>
  <p className="text-3xl text-[var(--col1)] font-light">
    We specialize in precision care management
  </p>

  <h2 className="text-5xl w-[60%] text-center">
    Ambulatory, Hospital, and Lab – expertly optimized
  </h2>

  <p className="text-2xl text-gray-400 w-[50%] text-center">
    From fast-paced ambulatory services to large-scale hospital operations and critical lab diagnostics—our solutions are built to ensure accuracy, speed, and compliance. We help you deliver better outcomes, reduce claim denials, and accelerate reimbursements across all medical sectors.
  </p>

  <div className="3BoxesSecondSection flex justify-center gap-[5em] my-[4em] relative">
    <div className="bgline3boxes absolute w-[99vw] top-[60%] z-[-4] h-[10px]"></div>
    
    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Ambulatory</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <GiAmbulance className="text-8xl" />
      </div>
    </div>

    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Hospital</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <FaHospitalAlt className="text-8xl" />
      </div>
    </div>

    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Lab</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <GiTestTubes className="text-8xl" />
      </div>
    </div>
  </div>
</div>
  )
}

export default AddedSection
