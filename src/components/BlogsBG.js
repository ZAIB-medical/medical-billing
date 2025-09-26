'use client'
import React from 'react'

const BlogsBG = ({ title, headingImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${headingImage})`,
      }}
      className="bg-center bg-cover bg-no-repeat h-[50vh] w-[100%]"
    >
      <div className="upperContentBlog bg-[#00000091] w-[100%] h-[100%] text-white flex flex-col justify-end px-[15vw] gap-[1em] pb-7">
        <h2 className="text-5xl font-bold">{title}</h2>
      </div>
    </div>
  )
}

export default BlogsBG
