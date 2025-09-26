'use client';
import React, { useEffect, useState } from 'react';
import BlogsBG from '@/components/BlogsBG';
import BlogsSlider from '@/components/BlogsSlider';
import { fetchBlogs } from '@/app/api/BlogPosts';
import { use } from 'react';
import Image from 'next/image';

const Page = ({ params }) => {
  const resolvedParams = use(params); // unwrap the params promise
  const slugParam = resolvedParams.slug;

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const blogs = await fetchBlogs();
      const slug = slugParam.replace(/-/g, ' ').toLowerCase();
      const matchedPost = blogs.find((p) => p.title.toLowerCase() === slug);
      setPost(matchedPost || null);
      setLoading(false);
    };
    fetchPost();
  }, [slugParam]);

  if (loading) {
    return (
      <div className="page py-20 text-center">
        <h2 className="text-3xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="page py-20 text-center">
        <h2 className="text-3xl font-bold">❌ Post not found</h2>
      </div>
    );
  }

  return (
    <div>
<BlogsBG 
  title={post.title} 
  headingImage={post.heading_image} 
/>

      <div className="page max-w-4xl mx-auto py-10 space-y-6">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-500">
          By {post.auther} • {post.publishedDate}
        </p>
        <Image
  src={post.cover_image}
  alt={post.title}
  width={1200}
  height={400}
  className="w-full h-[400px] object-cover rounded"
/>

        <p className="text-lg">{post.short_description}</p>
<p className="break-words text-lg">
  {post.full_text}
</p>

        <div className="flex gap-2">
          {post.tags.map((tagObj, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-200 rounded-full"
            >
              #{tagObj.tag}
            </span>
          ))}
        </div>
      </div>

      <BlogsSlider />
    </div>
  );
};

export default Page;
