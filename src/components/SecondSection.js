import React from 'react'
import { GiStomach } from "react-icons/gi";      // Gastroenterology
import { GiBrain } from "react-icons/gi";        // Neurosurgery
import { GiLungs } from "react-icons/gi";        // Thoracic

const SecondSection = () => {
  return (
<div 
  className="min-h-screen relative z-10 flex flex-col gap-6 items-center pt-[15vh]" 
  style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
>
  <p className="text-3xl text-[var(--col1)] font-light">We are problem solvers</p>
  <h2 className="text-5xl w-[60%] text-center">
    Our key performance indicators
  </h2>
  <p className="text-2xl text-gray-400 w-[50%] text-center">
    Our robust medical billing KPIs are measurable, specific, and aligned with your practice’s financial goals. The results? Accurate claim transmissions, better patient care, and faster reimbursements.
  </p>

  <div className="3BoxesSecondSection flex justify-center gap-[5em] my-[4em] relative">
    <div className="bgline3boxes absolute w-[99vw] top-[60%] z-[-4] h-[10px]"></div>
    
    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Gastroenterology</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <GiStomach className="text-8xl" />
      </div>
    </div>

    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Neurosurgery</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <GiBrain className="text-8xl" />
      </div>
    </div>

    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Thoracic</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <GiLungs className="text-8xl" />
      </div>
    </div>
  </div>
</div>
  )
}

export default SecondSection
