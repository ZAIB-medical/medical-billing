import PageBg2 from '@/components/PageBg2'
import BoxesPart from '@/components/servicesComp/BoxesPart'
import L2RTextImg from '@/components/servicesComp/L2RTextImg'
import TextSimple from '@/components/servicesComp/TextSimple'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const testmonials = [
    {
        name: 'Dr. Anthony',
        job: 'National Medical Labs',
        message: 'Transcure t has helped us save countless hours and improve our bottom line. The team is friendly, professional, and always available to answer our questions.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png'
    },
    {
        name: 'Dr. Richard',
        job: 'Laboratory Manager.',
        message: 'I used to dread our billing process, but since implementing Transcure, it has become much more manageable and efficient',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png'
    },
    {
        name: 'Dr. Susan',
        job: 'Laboratory Manager',
        message: 'Transcure helped us save time and improve accuracy in our billing coordination. Highly recommended for any lab!',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png'
    },
]


const cardsServIco = [
    {
        name: 'Provider Type',
        desc: 'Providers eligible for MIPS include physicians, physician assistants, nurse practitioners, clinical nurse specialists, and certified registered nurse anesthetists.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Layer_1.svg'
    },
    {
        name: 'Medical Billing Threshold',
        desc: 'Providers must bill at least $90,000 in Medicare Part B charges to meet the MIPS billing threshold.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Group-39894-1.svg'
    },
    {
        name: 'Patient Volume',
        desc: 'Providers must have cared for 200 or more Medicare patients to meet the MIPS patient volume requirement.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Group-39895.svg'
    },
    {
        name: 'Services Threshold',
        desc: 'Providers must perform 200 or more covered professional services under the Physician Fee Schedule to meet the MIPS services threshold.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Group-39896.svg'

    },
]

const page = () => {
    return (
        <div>
            <PageBg2 img = {'https://cloud.appwrite.io/v1/storage/buckets/6798a41d001fa41e179c/files/6798c0df001975dd21dc/view?project=6794f195002eec77bf76&project=6794f195002eec77bf76'} />
            <div className='page'>
                <L2RTextImg r2l={false} img={'https://transcure.net/wp-content/uploads/2024/11/8222333963.webp'} />
                <TextSimple />
                <L2RTextImg r2l={true} img={'https://transcure.net/wp-content/uploads/2024/11/image-1.webp'} />
                <L2RTextImg r2l={false} img={'https://transcure.net/wp-content/uploads/2024/11/e7195bef2c.webp'} />
                <BoxesPart data = {cardsServIco} />
                <Testimonials data = {testmonials} />
            </div>
        </div>
    )
}

export default page