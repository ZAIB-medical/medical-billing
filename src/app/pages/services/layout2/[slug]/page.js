import PageBg2 from '@/components/PageBg2'
import Testimonials from '@/components/Testimonials'
import React from 'react'

/* --------------------------------------------
 ✅ Local Components (no imports except PageBg2 + Testimonials)
---------------------------------------------*/

// ✅ Left-to-Right / Right-to-Left Section Component
const L2RTextImg = ({ r2l = false, title, desc, img }) => {
    return (
        <div
            className={`flex flex-col md:flex-row items-center gap-10 my-20 ${r2l ? "md:flex-row-reverse" : ""
                }`}
        >
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-lg leading-relaxed">{desc}</p>
            </div>

            <div className="flex-1">
                <img src={img} alt={title} className="rounded-lg w-full" />
            </div>
        </div>
    );
};

// ✅ Simple Text Block Component
const TextSimple = ({ title, description }) => {
    return (
        <div className="my-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg leading-relaxed">{description}</p>
        </div>
    );
};

// ✅ Boxes / Services Cards
const BoxesPart = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="p-6 border rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center"
                >
                    <img src={item.img} alt={item.name} className="h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

/* --------------------------------------------
 ✅ Page Content Data
---------------------------------------------*/

const testmonials = [
    {
        name: 'Dr. Anthony',
        job: 'National Medical Labs',
        message:
            'ExpertMd has helped us streamline our billing structure and reduce delays dramatically. The team is friendly, professional, and always available when needed.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png'
    },
    {
        name: 'Dr. Richard',
        job: 'Laboratory Manager',
        message:
            'We used to dread our billing workflow, but after working with the consulting team, everything is faster, more accurate, and far easier to manage.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png'
    },
    {
        name: 'Dr. Susan',
        job: 'Laboratory Manager',
        message:
            'Their consulting services helped us reduce errors, improve claim approvals, and recover revenue we didn’t even know we were losing.',
        img: 'https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png'
    },
];

const cardsServIco = [
    {
        name: 'Workflow Audit',
        desc: 'We analyze your complete billing cycle—from patient check-in to payment posting—to identify inefficiencies and streamline processes.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Layer_1.svg'
    },
    {
        name: 'Coding & Documentation Review',
        desc: 'Ensure accurate coding and complete documentation to reduce denials and accelerate reimbursement.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Group-39894-1.svg'
    },
    {
        name: 'Claims Optimization',
        desc: 'Improve clean-claim rates, minimize errors, and ensure faster approvals from payers.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Group-39895.svg'
    },
    {
        name: 'Revenue Recovery',
        desc: 'Identify unpaid claims, uncollected revenue, and underpayments to maximize your income.',
        img: 'https://transcure.net/wp-content/uploads/2024/11/Group-39896.svg'
    },
];

/* --------------------------------------------
 ✅ Main Page Component
---------------------------------------------*/

const page = () => {
    return (
        <div>
            <PageBg2
                img={
                    'https://cloud.appwrite.io/v1/storage/buckets/6798a41d001fa41e179c/files/6798c0df001975dd21dc/view?project=6794f195002eec77bf76'
                }
            />

            <div className="page">

                {/* Section 1 */}
                <L2RTextImg
                    r2l={false}
                    title="Expert Medical Billing Consulting Services"
                    desc="Our consulting team helps practices improve their revenue cycle, reduce claim denials, and eliminate bottlenecks. We evaluate your billing processes, automate repetitive tasks, and implement best practices to ensure timely, accurate reimbursements."
                    img="https://transcure.net/wp-content/uploads/2024/11/8222333963.webp"
                />

                {/* Section 2 */}
                <TextSimple
                    title="Optimize Your Entire Billing Workflow"
                    description="We examine every part of your billing chain—from scheduling and insurance verification to coding, charge entry, claim submission, and payment posting. Our goal is to improve efficiency, accuracy, and compliance while maximizing revenue for your practice."
                />

                {/* Section 3 */}
                <L2RTextImg
                    r2l={true}
                    title="Reduce Claim Denials & Improve Approval Rates"
                    desc="Most denials come from incorrect coding, incomplete documentation, and outdated workflows. We help your team prevent denials before they happen through comprehensive coding audits, cleaner claim submission processes, and proactive monitoring."
                    img="https://transcure.net/wp-content/uploads/2024/11/image-1.webp"
                />

                {/* Section 4 */}
                <L2RTextImg
                    r2l={false}
                    title="Stay Fully Compliant With Billing Regulations"
                    desc="Our consultants ensure your practice remains fully up to date with Medicare, Medicaid, commercial payers, and HIPAA requirements. We help you avoid penalties, maintain audit readiness, and keep your billing operations compliant at all times."
                    img="https://transcure.net/wp-content/uploads/2024/11/e7195bef2c.webp"
                />

                {/* Features Section */}
                <BoxesPart data={cardsServIco} />

                {/* Testimonials */}
                <Testimonials data={testmonials} />
            </div>
        </div>
    );
};

export default page;
