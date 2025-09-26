import React from 'react'
import { FiRefreshCw } from "react-icons/fi";
import { FaRecycle } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";

const SecondSection = () => {
  return (
<div 
  className="min-h-screen relative z-10 flex flex-col gap-6 items-center pt-[15vh]" 
  style={{ background: 'linear-gradient(to right, #0a2342, #101722)' }}
>
  <p className="text-3xl text-[var(--col1)] font-light">We are problems solvers</p>
  <h2 className="text-5xl w-[60%] text-center">
    Companies generate waste, which needs to be managed safely and efficiently.
  </h2>
  <p className="text-2xl text-gray-400 w-[50%] text-center">
    At Heritage Environmental Services we embrace the role of providing compliant waste management solutions 
    to clients across the country. Check out our Services for more details.
  </p>

  <div className="3BoxesSecondSection flex justify-center gap-[5em] my-[4em] relative">
    <div className="bgline3boxes absolute w-[99vw] top-[60%] z-[-4] h-[10px]"></div>
    
    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Reclaim</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <FiRefreshCw className="text-8xl" />
      </div>
    </div>

    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Recycle</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <FaRecycle className="text-8xl" />
      </div>
    </div>

    <div className="iconBoxSecondSecton flex flex-col gap-5 items-center text-3xl">
      <p>Treat</p>
      <div className="iconBoxSecondSectionIcon flex p-[20px] border-[10px] border-[var(--col1)] rounded-full bg-[#334157]">
        <GrTest className="text-8xl" />
      </div>
    </div>
  </div>
</div>

  )
}

export default SecondSection