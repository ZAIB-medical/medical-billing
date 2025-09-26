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
        <div className='flex flex-col bg-[var(--bg1)] gap-[2em] items-center p-[2em] my-[1em]'>
            <h2 className='text-white text-4xl font-bold'>Assisting Labs of All types</h2>
            <div className="boxesLayout1 grid grid-cols-5 gap-[1em]">
                {
                    boxesData.map((me, index) => (
                        <div key={index} className="boxLayout1 bg-[white] text-black flex flex-col items-center gap-3 mx-auto w-[70%] max-h-max py-3 cursor-pointer">
                            <Image src={me.img} height={100} width={100} alt='hrefimg' className='w-[70%] h-[auto]' />
                            <p className='text-center text-lg w-[80%]'>{me.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BoxesLayout1