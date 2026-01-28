import BgPage3 from '@/components/BgPage3'
import BillingSpatility from '@/components/servicesComp/BillingSpatility'
import AppoinmentForm from '@/components/forms/AppoinmentForm'
import L2RTextImg from '@/components/servicesComp/L2RTextImg'
import React from 'react'

const Specialties = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Background Section */}
      <BgPage3 />

      {/* Main Content */}
      <div className="page flex flex-col gap-12 px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        {/* Left-to-Right Text and Image */}
        <div className="w-full">
          <L2RTextImg
            img={'https://transcure.net/wp-content/uploads/2024/01/image-12.jpeg'}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Billing Specialties */}
        <div className="w-full">
          <BillingSpatility />
        </div>

      
      </div>
    </div>
  )
}

export default Specialties
