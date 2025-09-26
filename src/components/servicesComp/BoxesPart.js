import React from 'react'
import CardServicesIco from '../cards/CardServicesIco'

const BoxesPart = (props) => {
  return (
    <div className='flex flex-col gap-[2em] text-center items-center my-[3em]'>
        <h2 className='text-3xl text-bold'>Eligibility Requirements for MIPS Participation</h2>
        <p className='w-[70%]'>To participate in MIPS Healthcare 2024, providers must meet specific thresholds for Medicare billing, patient volume, and services provided. These criteria ensure that only eligible clinicians are subject to performance reporting and payment adjustments:</p>
        <div className='grid grid-cols-2 gap-[2em]'>
            {
                props.data.map((me, index)=>(
                    <CardServicesIco key={index} img = {me.img} name = {me.name} desc = {me.desc} />
                ))
            }
        </div>
    </div>
  )
}

export default BoxesPart