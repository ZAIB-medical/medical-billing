'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const BlogCard = (props) => {
    const short = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nemo tenetur accusantium eos, autem beatae vitae vel iste ea non voluptates, natus eius deserunt, perferendis totam voluptatibus dolore nulla est.';
    
    const pathname = usePathname();
    const currentUrl = `https://labdevelopment.vercel.app${pathname}`;

    return (
        <div className="w-[70%] mx-auto gap-4 flex flex-col my-auto">
            <Link href={`/pages/blogs/${props.title.split(' ').join('-')}`} className="font-bold text-[var(--bg2)]">
                {props.title}
            </Link>
            <p>{props.shortDescription.slice(0, 100)}...</p>
            <Image 
                src={props.image} 
                height={500} 
                width={600} 
                alt="Blog Image" 
                className="h-[280px] max-h-[280px] w-full" 
            />
            
            <div className='flex gap-3'>
                {props.tags.slice(0,2).map((me, index)=>(
                    <Link key={index} href={'/'}>#{me.tag}</Link>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
