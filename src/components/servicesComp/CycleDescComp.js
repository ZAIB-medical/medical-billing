import Image from 'next/image'
import React from 'react'

const CycleDescComp = () => {
  return (
    <div className='flex flex-col gap-8 w-full max-w-5xl px-4 sm:px-6 md:px-12 mx-auto'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>How Our Revenue Cycle Services Work</h2>
        
        <div className='flex flex-col gap-6 text-gray-700 text-base sm:text-lg'>
            <p>
                ExpertMd employs a thorough strategy in Revenue Cycle Management (RCM) services, optimizing every stage of the patient process to maximize revenue opportunities. We initiate the process with thorough patient registration and eligibility verification, ensuring precise and up-to-date information capture to minimize claim denials.
            </p>
            <p>
                Our experienced coders ensure accurate coding and charge capture, maximizing reimbursement and minimizing the risk of compliance issues. Leveraging advanced technology and best practices in RCM services, we facilitate efficient real-time claims monitoring, proactively addressing issues to reduce denials and ensure timely reimbursements.
            </p>
            <p>
                Our RCM experts work tirelessly to overturn denied claims and recover revenue that might otherwise be lost. Timely and accurate payment posting is crucial for maintaining a healthy revenue cycle. With ExpertMd’s RCM services, you can expect improved cash flow and a streamlined financial reconciliation process.
            </p>
        </div>

        <div className='flex justify-center mt-6'>
            <Image 
                className='w-full max-w-md sm:max-w-lg md:max-w-xl' 
                src={'https://transcure.net/wp-content/uploads/2024/03/rcm-info-768x777.webp'} 
                width={600} 
                height={600} 
                alt='Revenue Cycle Illustration' 
            />
        </div>
    </div>
  )
}

export default CycleDescComp
