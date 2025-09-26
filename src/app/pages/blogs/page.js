'use client';
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/cards/BlogCard';
import PageBg from '@/components/PageBg';
import { fetchBlogs } from '@/app/api/BlogPosts';

const selectItems = [
  { item: 'Blogs' },
  { item: 'Careers & Culture' },
  { item: 'Community News' },
  { item: 'Newsletters' },
  { item: 'Press Release' },
  { item: 'Published Articles' },
  { item: 'Sustainability' },
];

const selectItems1 = [
  { item: 'Battery Recycling' },
  { item: 'Careers and Culture' },
  { item: 'Emergency Disinfection Services' },
  { item: 'Emergency Response' },
  { item: 'Emergency Response Planning' },
  { item: 'Fuel Blending' },
  { item: 'Hazardous Waste Regulations' },
  { item: 'Household Hazardous Waste' },
  { item: 'Incineration' },
  { item: 'Industrial Cleaning' },
  { item: 'Inorganic Waste Treatment' },
  { item: 'Lab Pack' },
  { item: 'Landfill' },
  { item: 'Onsite Resource Personnel' },
  { item: 'Research and Development' },
  { item: 'Safety' },
  { item: 'Strategic Disposal Projects' },
  { item: 'Sustainability' },
  { item: 'Transportation' },
  { item: 'Wastewater Treatment' },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const data = await fetchBlogs();
      setBlogs(data);
      setLoading(false);
    };
    fetchBlog();
  }, []);

  const loadMorePosts = () => setVisiblePosts((prev) => prev + 6);

  return (
    <div>
      <PageBg
        name="Blogs"
        short="Stay informed with expert insights on medical testing, health tips, and diagnostics."
      />

      <div className="page">
        {loading ? (
          <p className="mt-8">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="mt-8">No blogs available.</p>
        ) : (
          <div className="blogsMap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2em] mt-8">
            {blogs.slice(0, visiblePosts).map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                shortDescription={post.short_description}
                image={post.cover_image}
                tags={post.tags}
                author={post.auther}
                publishedDate={post.publishedDate}
              />
            ))}
          </div>
        )}

        {visiblePosts < blogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMorePosts}
              className="px-6 py-3 text-lg font-bold bg-[var(--bg2)] text-white rounded-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;