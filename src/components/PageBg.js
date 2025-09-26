import React from 'react'

const PageBg = ({ name, short }) => {
  return (
    <div
      className="w-full bg-gradient-to-r from-[#0a2342] to-[#101722] py-20"
    >
      <div className="max-w-5xl mx-auto text-center px-4 flex flex-col gap-6 text-white">
        <p className="text-[var(--col1)] text-3xl font-semibold">
          {name}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          {short}
        </h2>
      </div>
    </div>
  )
}

export default PageBg
