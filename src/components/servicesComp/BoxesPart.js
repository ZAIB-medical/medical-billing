import React from 'react'
import CardServicesIco from '../cards/CardServicesIco'

const BoxesPart = (props) => {
  return (
    <div className='flex flex-col gap-8 text-center items-center my-12 px-4 sm:px-6 md:px-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Eligibility Requirements for MIPS Participation</h2>
        <p className='w-full sm:w-4/5 md:w-3/5 text-base sm:text-lg text-gray-700'>
            To participate in MIPS Healthcare 2024, providers must meet specific thresholds for Medicare billing, patient volume, and services provided. These criteria ensure that only eligible clinicians are subject to performance reporting and payment adjustments:
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
            {props.data.map((me, index) => (
                <CardServicesIco 
                    key={index} 
                    img={me.img} 
                    name={me.name} 
                    desc={me.desc} 
                />
            ))}
        </div>
    </div>
  )
}

export default BoxesPart
