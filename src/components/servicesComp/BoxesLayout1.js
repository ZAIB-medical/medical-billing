import Image from 'next/image'
import React from 'react'

const BoxesLayout1 = () => {
    const boxesData = [
        {
            text: 'Hospital Outreach & Outpatient Labs',
            img: 'https://transcure.net/wp-content/uploads/2023/05/Hospital-Outreach-Outpatient-Labs.png'
        },
        {
            text: 'Toxicology Laboratories',
            img: 'https://transcure.net/wp-content/uploads/2023/05/Toxicology-Laboratories.png'
        },
        {
            text: 'Molecular Diagnostics',
            img: 'https://transcure.net/wp-content/uploads/2023/05/Molecular-Diagnostics.png'
        },
        {
            text: 'Clinical Laboratories',
            img: 'https://transcure.net/wp-content/uploads/2023/05/Clinical-Laboratories.png'
        },
        {
            text: 'Pathology Laboratory',
            img: 'https://transcure.net/wp-content/uploads/2023/05/Clinical-Laboratories-1.png'
        },
    ]

    return (
        <div className='flex flex-col bg-[var(--bg1)] gap-8 items-center p-6 md:p-12 my-8'>
            <h2 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center'>Assisting Labs of All Types</h2>
            <div className="boxesLayout1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
                {boxesData.map((me, index) => (
                    <div key={index} className="boxLayout1 bg-white text-black flex flex-col items-center gap-3 py-4 px-2 sm:px-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                        <Image src={me.img} height={100} width={100} alt='lab-img' className='w-[60%] h-auto sm:w-[70%]' />
                        <p className='text-center text-sm sm:text-base md:text-lg w-[80%]'>{me.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BoxesLayout1
