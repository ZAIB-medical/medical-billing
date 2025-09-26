import Image from 'next/image'
import React from 'react'

const CycleDescComp = () => {
  return (
    <div className='flex flex-col gap-[2em] w-[70%] items-center mx-auto'>
        <h2 className='text-4xl'>How Our Revenue Cycle Services Work</h2>
        <p>Transcure employs a thorough strategy in Revenue Cycle Management (RCM) services, optimizing every stage of the patient process to maximize revenue opportunities. We initiate the process with thorough patient registration and eligibility verification, ensuring precise and up-to-date information capture to minimize claim denials</p>
        <p>Our experienced coders ensure accurate coding and charge capture, maximizing reimbursement and minimizing the risk of compliance issues. Leveraging advanced technology and best practices in RCM services, we facilitate efficient real-time claims monitoring, proactively addressing issues to reduce denials and ensure timely reimbursements.</p>
        <p>Our RCM experts work tirelessly to overturn denied claims and recover revenue that might otherwise be lost. Timely and accurate payment posting is crucial for maintaining a healthy revenue cycle. With Transcure’s RCM services, you can expect improved cash flow and a streamlined financial reconciliation process.</p>
        <Image className='mx-auto' src={'https://transcure.net/wp-content/uploads/2024/03/rcm-info-768x777.webp'} width={600} height={600} alt='cycle' />
    </div>
  )
}

export default CycleDescComp