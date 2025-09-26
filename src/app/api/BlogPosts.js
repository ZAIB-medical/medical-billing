'use client'

import { supabase } from '../supabaseClient'

let cachedBlogs = []

// Fetch blogs from Supabase
export const fetchBlogs = async () => {
  if (cachedBlogs.length > 0) return cachedBlogs // optional cache

  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('id', { ascending: false })

  if (error) {
    console.error('Error fetching blogs:', error)
    return []
  }

  // Convert hashtags to array for tag display
  cachedBlogs = data.map((post) => ({
    ...post,
    tags: post.hashtags
      ? post.hashtags.split(',').map((tag) => ({ tag: tag.trim() }))
      : [],
    publishedDate: post.created_at?.split('T')[0],
  }))

  return cachedBlogs
}
