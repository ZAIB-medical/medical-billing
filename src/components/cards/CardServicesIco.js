import Image from 'next/image'
import React from 'react'

const CardServicesIco = (props) => {
  return (
    <div className='bg-[var(--bg1)] text-white text-left p-[2em]  flex flex-col gap-4 mx-auto'>
        <Image src={props.img} height={100} width={100} alt='ico' />
        <h2 className='text-2xl text-bold'>{props.name}</h2>
        <p>{props.desc}</p>
    </div>
  )
}

export default CardServicesIco