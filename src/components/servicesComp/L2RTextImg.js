import Image from 'next/image'
import React from 'react'

const L2RTextImg = (props) => {
  return (
    <div className={`flex ${props.r2l === true ? 'flex-row-reverse' : 'flex-row'} w-[70%] mx-auto gap-[10vw]`}>
      <div className="leftL2R w-[50%] flex flex-col justify-center gap-[1em]">
        <h2 className='text-3xl font-bold'>{props.title ? props.title : 'Independent Labs'}</h2>
        <p>{props.desc ? props.desc : 'Our services are tailored to meet the needs of independent labs. From claim submission to denial management, we focus on maximizing revenue while keeping your operating costs low.'}</p>
        <p>{props.desc2}</p>
        <p>{props.desc3}</p>
      </div>
      <div className="rightL2R w-[50%] flex justify-center items-center">
        <Image src={props.img} width={500} height={500} alt='l2r' />
      </div>
    </div>
  )
}

export default L2RTextImg