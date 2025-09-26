import BgPage3 from '@/components/BgPage3'
import BoxesSpa2 from '@/components/BoxesSpa2'
import AppoinmentForm from '@/components/forms/AppoinmentForm'
import L2RTextImg from '@/components/servicesComp/L2RTextImg'
import React from 'react'

const Specialties = () => {
  return (
    <div>
        <BgPage3 />
        <div className="page">
            <L2RTextImg img = {'https://transcure.net/wp-content/uploads/2024/01/image-12.jpeg'} />
            <BoxesSpa2 />
            <AppoinmentForm />
        </div>
    </div>
  )
}

export default Specialties