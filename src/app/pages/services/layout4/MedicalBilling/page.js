import PageBg2 from '@/components/PageBg2'
import Testimonials from '@/components/Testimonials'
import React from 'react'

/* --------------------------------------------
 ✅ Local Components
---------------------------------------------*/

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

const TextSimple = ({ title, description }) => {
    return (
        <div className="my-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg leading-relaxed">{description}</p>
        </div>
    );
};

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
 ✅ Page Data (Medical Billing — NOT consulting)
---------------------------------------------*/

const testmonials = [
    {
        name: "Dr. Sarah Williams",
        job: "Family Practice",
        message:
            "Our collections improved by nearly 30% after switching to ExpertMd’s billing services. Their accuracy and speed are unmatched.",
        img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-John-Smith.png",
    },
    {
        name: "Dr. Mark Benson",
        job: "Internal Medicine",
        message:
            "Claims are now processed faster, and denials have dropped significantly. Amazing service and extremely reliable.",
        img: "https://transcure.net/wp-content/uploads/2023/05/Laboratory-Manager..png",
    },
    {
        name: "Dr. Helena Scott",
        job: "Primary Care",
        message:
            "ExpertMd handles our billing end-to-end with complete transparency. I can finally focus on patient care again.",
        img: "https://transcure.net/wp-content/uploads/2023/05/Dr.-Susan.png",
    },
];

const cardsServIco = [
    {
        name: "Insurance Verification",
        desc: "We verify patient eligibility, benefits, coverage limits, and pre-authorizations to prevent denials before the visit.",
        img: "https://transcure.net/wp-content/uploads/2024/11/Layer_1.svg",
    },
    {
        name: "Accurate Medical Coding",
        desc: "Our certified coders apply correct ICD-10, CPT, and HCPCS codes to ensure compliance and faster reimbursement.",
        img: "https://transcure.net/wp-content/uploads/2024/11/Group-39894-1.svg",
    },
    {
        name: "Claim Submission & Follow-up",
        desc: "We submit clean claims on time, track them, resolve issues, and aggressively follow up on pending payments.",
        img: "https://transcure.net/wp-content/uploads/2024/11/Group-39895.svg",
    },
    {
        name: "Payment Posting & Reporting",
        desc: "All payments, EOBs, adjustments, and denials are posted accurately with clear financial reports for your practice.",
        img: "https://transcure.net/wp-content/uploads/2024/11/Group-39896.svg",
    },
];

/* --------------------------------------------
 ✅ MAIN PAGE — Medical Billing Services
---------------------------------------------*/

const Page = () => {
    return (
        <div>
            {/* ✅ Page Header */}
            <PageBg2 img="https://cloud.appwrite.io/v1/storage/buckets/6798a41d001fa41e179c/files/6798c0df001975dd21dc/view?project=6794f195002eec77bf76" />

            <div className="page">

                {/* ✅ Section 1 */}
                <L2RTextImg
                    r2l={false}
                    title="Comprehensive Medical Billing Services"
                    desc="ExpertMd offers complete end-to-end medical billing services designed to simplify your workflow, reduce revenue leakage, and maximize reimbursements. Our experienced billing specialists handle coding, claim submission, follow-ups, and payment posting so you can stay focused on providing exceptional patient care."
                    img="https://transcure.net/wp-content/uploads/2024/11/8222333963.webp"
                />

                {/* ✅ Section 2 */}
                <TextSimple
                    title="A Complete Revenue Cycle Solution for Your Practice"
                    description="We manage every step of the revenue cycle process with precision. From eligibility checks and accurate coding to denial management and financial reporting, our goal is to improve your cash flow, reduce administrative workload, and ensure your practice is financially strong."
                />

                {/* ✅ Section 3 */}
                <L2RTextImg
                    r2l={true}
                    title="Reduce Claim Denials & Get Paid Faster"
                    desc="Most claim denials occur because of incorrect coding, missing documentation, or eligibility issues. Our experts fix these problems at the source by utilizing best practices, advanced billing tools, and strict quality checks to ensure claims are submitted correctly the first time."
                    img="https://transcure.net/wp-content/uploads/2024/11/image-1.webp"
                />

                {/* ✅ Section 4 */}
                <L2RTextImg
                    r2l={false}
                    title="Transparent, Compliant & Stress-Free Billing"
                    desc="Our team ensures your billing remains fully compliant with payer rules, Medicare, and HIPAA. You get full transparency with detailed financial reports that show exactly how your revenue cycle is performing."
                    img="https://transcure.net/wp-content/uploads/2024/11/e7195bef2c.webp"
                />

                {/* ✅ Features Section */}
                <BoxesPart data={cardsServIco} />

                {/* ✅ Testimonials */}
                <Testimonials data={testmonials} />

            </div>
        </div>
    );
};

export default Page;
