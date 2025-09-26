import React from 'react'
import CardTestmonial from './cards/CardTestmonial'

const Testimonials = (props) => {
    return (
        <div className='flex flex-col gap-[2em] my-[2em]'>
            <div className='flex flex-col text-center gap-[1em]'>
                <h2 className='text-4xl font-bold'>Testimonials</h2>
                <p>Satisfied Providers are our Testaments</p>
            </div>
            <div className="testmonialCards grid grid-cols-3 w-[60%] mx-auto gap-[2em]">
                {
                    props.data.map((me, index) => (
                        <CardTestmonial key={index} name={me.name} job={me.job} message={me.message} img={me.img} />
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials