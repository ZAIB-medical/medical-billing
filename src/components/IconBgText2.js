import Image from 'next/image'
import React from 'react'


const data = [
    {
        img : 'https://transcure.net/wp-content/uploads/2024/01/Trusted-by-500-physicians.png', 
        text: 'Trusted by 500+ physicians',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2024/01/Key-Steps-in-Medical-Billing-and-Coding-Services.png', 
        text: 'Catering to 32+ specialties',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2024/01/1100-certified-medical-billers-and-coders.png', 
        text: '1100+ certified medical billers and coders',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2024/01/End-to-End-Automated-Billing-Solution.png', 
        text: 'End-to-End Automated Billing Solution',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2024/01/Up-to-98-First-Pass-Clean-Claim-Rate-.png', 
        text: 'Up to 98% First Pass Clean Claim Rate ',
    },
]

const IconBgText2 = () => {
  return (
    <div>
        <div className="grid grid-cols-5 gap-[2em] bg-[var(--bg1)] text-white p-[2em]">
            {
                data.map((me, index)=>(
                    <div key={index} className='flex flex-col items-center gap-4 text-center'>
                        <Image src={me.img} width={100} height={100} alt='ffdsdsf' />
                        <p>{me.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default IconBgText2