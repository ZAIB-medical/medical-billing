'use client'
import React from 'react'
import { FaCircle } from "react-icons/fa";

const sixthSectionItems = [
    {
        name: 'Onsite Services',
        list: [
            { name: 'Onsite Resource Personnel' },
            { name: 'Lab Packing' },
            { name: 'Industrial Cleaning' },
            { name: 'Strategic Projects – Remediation Waste Disposal' },
        ]
    },
    {
        name: 'Waste Transportation, Treatment, & Disposal',
        list: [
            { name: 'Hazardous Waste Services' },
            { name: 'Incineration Services' },
            { name: 'Joplin, MO Demilitarization, Explosive Disposal, & Incineration' },
            { name: 'PFAS Management' },
            { name: 'Inorganic Waste Treatment' },
            { name: 'Wastewater Treatment' },
            { name: 'Landfill' },
            { name: 'Hazardous Waste Transportation' },
            { name: 'Household Hazardous Waste' },
        ]
    },
    {
        name: 'Technical Solutions',
        list: [
            { name: 'Environmental Compliance Training' },
            { name: 'Regulatory Compliance Assistance' },
        ]
    },
    {
        name: 'Emergency Response',
        list: [
            { name: 'Emergency Disinfection Services' },
            { name: 'Emergency Response Planning' },
            { name: 'OSRO Response' },
        ]
    },
]

const SixthSection = () => {
    return (
        <div className="bg-white text-black relative z-10 min-h-screen flex flex-col gap-12 items-center justify-center py-16 px-4 sm:px-8">
            {/* Section Title */}
            <div className="text-center">
                <p className="text-[var(--col1)] text-2xl sm:text-3xl font-light">Your Tailored Solution,</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">Derived From These Services</h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {sixthSectionItems.map((me, index) => (
                    <div key={index} className="bg-[#0a2342] flex flex-col p-6 rounded-xl text-white hover:shadow-lg transition">
                        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">{me.name}</h2>
                        <div className="h-1 w-16 bg-[var(--col1)] rounded-full mx-auto mb-4"></div>
                        <div className="flex flex-col gap-2">
                            {me.list.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                                    <FaCircle color="#6A98D0" className="text-xs sm:text-sm" /> {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SixthSection;
