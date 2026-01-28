import PageBg2 from '@/components/PageBg2'
import BoxesLayout1 from '@/components/servicesComp/BoxesLayout1'
import L2RTextImg from '@/components/servicesComp/L2RTextImg'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const testmonials = [
    {
        name: 'Dr. Anthony',
        job: 'National Medical Labs',
        message: 'ExpertMd t has helped us save countless hours and improve our bottom line. The team is friendly, professional, and always available to answer our questions.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png'
    },
    {
        name: 'Dr. Richard',
        job: 'Laboratory Manager.',
        message: 'I used to dread our billing process, but since implementing ExpertMd, it has become much more manageable and efficient',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png'
    },
    {
        name: 'Dr. Susan',
        job: 'Laboratory Manager',
        message: 'ExpertMd helped us save time and improve accuracy in our billing coordination. Highly recommended for any lab!',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png'
    },
]

const page = () => {
    const credentialingService = {
  img: '/credentialingimage.png', // replace with your credentialing image
  r2l: false, // image right, text left
  title: 'Simplify Provider Credentialing',
  short:
    'Our Credentialing services ensure that your providers are properly enrolled, verified, and approved with all insurance networks, reducing delays and compliance risks.',
  description:
    'ExpertMd handles every step of provider credentialing, from primary source verification to enrollment in insurance networks. Save time, stay compliant, and get your providers ready to see patients without administrative hassles.',
}
    return (
        <div>
            <PageBg2
        img={credentialingService.img}
        r2l={credentialingService.r2l}
        title={credentialingService.title}
        short={credentialingService.short}
        description={credentialingService.description}
      />

            <div className='page'>
                <BoxesLayout1 />
                <L2RTextImg r2l={false} img={'https://transcure.net/wp-content/uploads/2023/05/Independent-Labs.png'} />
                <L2RTextImg r2l={true} img={'https://transcure.net/wp-content/uploads/2023/05/Hospital-Labs.png'} />
                <L2RTextImg r2l={false} img={'https://transcure.net/wp-content/uploads/2023/05/Physician-Office-Labs.png'} />
                <Testimonials data = {testmonials} />
            </div>
        </div>
    )
}

export default page