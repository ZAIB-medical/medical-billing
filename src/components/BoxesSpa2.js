import React from 'react'
import CardServicesIco2 from './cards/CardServicesIco2'

const data = [
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Appointment-Scheduling.png',
        name: 'Appointment Scheduling',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Analytics-for-laboratories.png',
        name: 'Patient Registration',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Eligibility-and-Benefits-Verification.png',
        name: 'Eligibility and Benefits Verification',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Utilization-Review.png',
        name: 'Utilization Review',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Describing-Changes.png',
        name: 'Referral Authorization',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Appointment-Scheduling.png',
        name: 'Appointment Scheduling',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Analytics-for-laboratories.png',
        name: 'Patient Registration',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Eligibility-and-Benefits-Verification.png',
        name: 'Eligibility and Benefits Verification',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Utilization-Review.png',
        name: 'Utilization Review',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Utilization-Review.png',
        name: 'Utilization Review',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Utilization-Review.png',
        name: 'Utilization Review',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Utilization-Review.png',
        name: 'Utilization Review',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Describing-Changes.png',
        name: 'Referral Authorization',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Describing-Changes.png',
        name: 'Referral Authorization',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
    {
        img : 'https://transcure.net/wp-content/uploads/2023/12/Describing-Changes.png',
        name: 'Referral Authorization',
        desc: 'Our RCM services begin with efficient appointment scheduling. By leveraging advanced scheduling systems, we optimize appointment slots, reducing wait times and enhancing patient satisfaction.',
    },
]

const BoxesSpa2 = () => {
  return (
    <div className='w-[80%] mx-auto my-[3em] text-center flex flex-col gap-[2em]'>
        <h2 className='text-4xl text-bold'>Medical Billing Specialities</h2>
        <p className='text-lg'>Transcure’s mission is to make a difference in healthcare by delivering high-quality solutions that serve our practices, their patients, and their communities.</p>
        <div className='grid grid-cols-5 gap-[2em] mx-auto'>
            {
                data.map((me, index)=>(
                    <CardServicesIco2 key={index} img = {me.img} name = {me.name} desc = {me.desc} />
                ))
            }
        </div>
    </div>
  )
}

export default BoxesSpa2