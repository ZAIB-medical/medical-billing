'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { fetchBlogs } from '@/app/api/BlogPosts';
import BlogCard from './cards/BlogCard';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

const BlogsSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data.slice(0, 5)); // limit to 5 blogs
    };
    getBlogs();
  }, []);

  return (
    <div className="bg-[var(--bg1)] text-white px-[15vw] py-[3em] flex flex-col gap-10">
      <h2 className="text-center text-3xl font-bold">More News From Heritage</h2>
      <div className="relative">
        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full"
        >
          <FaLongArrowAltLeft size={30} />
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full"
        >
          <FaLongArrowAltRight size={30} />
        </button>

        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
        >
          {blogs.map((post) => (
            <SwiperSlide key={post.id}>
              <BlogCard
                title={post.title}
                shortDescription={post.short_description}
                image={post.cover_image}
                tags={post.tags}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="custom-pagination flex justify-center mt-4"></div>
      </div>
    </div>
  );
};

export default BlogsSlider;
