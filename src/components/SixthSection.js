import React from 'react'
import { FaCircle } from "react-icons/fa";

const sixthSectionItems = [
    {
        name: 'Onsite Services',
        list: [
            {
                name: 'Onsite Resource Personnel'
            },
            {
                name: 'Lab Packing'
            },
            {
                name: 'Industrial Cleaning'
            },
            {
                name: 'Strategic Projects – Remediation Waste Disposal'
            },
        ]
    },
    {
        name: 'Waste Transportation, Treatment, & Disposal',
        list: [
            {
                name: 'Hazardous Waste Services'
            },
            {
                name: 'Incineration Services'
            },
            {
                name: 'Joplin, MO Demilitarization, Explosive Disposal, & Incineration'
            },
            {
                name: 'PFAS Management'
            },
            {
                name: 'Inorganic Waste Treatment'
            },
            {
                name: 'Wastewater Treatment'
            },
            {
                name: 'Landfill'
            },
            {
                name: 'Hazardous Waste Transportation'
            },
            {
                name: 'Household Hazardous Waste'
            },
        ]
    },
    {
        name: 'Technical Solutions',
        list: [
            {
                name: 'Environmental Compliance Training'
            },
            {
                name: 'Regulatory Compliance Assistance'
            },
        ]
    },
    {
        name: 'Emergency Response',
        list: [
            {
                name: 'Emergency Disinfection Services'
            },
            {
                name: 'Emergency Response Planning'
            },
            {
                name: 'OSRO Response'
            },
        ]
    },
]

const SixthSection = () => {
    return (
        <div className="bg-white text-black relative z-10 min-h-screen flex flex-col gap-[3em] items-center justify-center py-16">
            <div>
                <p className="text-center text-[var(--col1)] text-3xl">Your Tailored Solution,</p>
                <h2 className="text-center text-5xl">Derived From These Services</h2>
            </div>

            <div className="gridBoxSectionSix grid grid-cols-2 w-[80%] gap-[2em] text-white mx-auto">
                {sixthSectionItems.map((me, index) => (
                    <div key={index} className="bg-[#0a2342] relative flex flex-col overflow-hidden p-6 rounded-xl">
                        <h2 className="text-center text-2xl">{me.name}</h2>
                        <div className="bgline3boxes my-4 w-full h-[4px] bg-[var(--col1)] rounded-full"></div>
                        {me.list.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-lg mb-2">
                                <FaCircle color="#6A98D0" className="text-sm" /> {item.name}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SixthSection