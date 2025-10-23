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
    return (
        <div>
            <PageBg2 img = {'https://cloud.appwrite.io/v1/storage/buckets/6798a41d001fa41e179c/files/6798a42a0012373fe3f8/view?project=6794f195002eec77bf76&project=6794f195002eec77bf76'} />
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