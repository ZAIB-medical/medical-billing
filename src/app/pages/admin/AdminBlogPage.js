'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    cover_image: '',
    heading_image: '',
    short_description: '',
    full_text: '',
    auther: '',
    hashtags: '',
  })
  const [editingId, setEditingId] = useState(null)
  const [loggingOut, setLoggingOut] = useState(false)
  const BUCKET_NAME = 'blog-images'

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('id', { ascending: false })
    if (error) console.error(error)
    else setBlogs(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  // Upload file to Supabase Storage
  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0]
    if (!file) return

    const filePath = `${Date.now()}_${file.name}`

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, { upsert: true })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      return
    }

    const { data: publicData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath)

    setFormData((prev) => ({
      ...prev,
      [fieldName]: publicData.publicUrl,
    }))
  }

  // Handle form submit (add or update)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      title: formData.title?.trim() || '',
      cover_image: formData.cover_image || '',
      heading_image: formData.heading_image || '',
      short_description: formData.short_description?.trim() || '',
      full_text: formData.full_text?.trim() || '',
      auther: formData.auther?.trim() || '',
      hashtags: formData.hashtags?.trim() || '',
    }

    try {
      let response
      if (editingId) {
        response = await supabase.from('blogs').update(payload).eq('id', editingId).select()
      } else {
        response = await supabase.from('blogs').insert([payload]).select()
      }

      if (response.error) {
        console.error('Supabase error full:', response)
        alert(`Error saving blog: ${response.error.message}`)
        return
      }

      // Reset form
      setShowForm(false)
      setEditingId(null)
      setFormData({
        title: '',
        cover_image: '',
        heading_image: '',
        short_description: '',
        full_text: '',
        auther: '',
        hashtags: '',
      })

      fetchBlogs()
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('Error saving blog. Check console for details.')
    }
  }

  // Handle delete
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return
    const { error } = await supabase.from('blogs').delete().eq('id', id)
    if (error) console.error(error)
    else fetchBlogs()
  }

  // Handle edit
  const handleEdit = (blog) => {
    setFormData({
      title: blog.title || '',
      cover_image: blog.cover_image || '',
      heading_image: blog.heading_image || '',
      short_description: blog.short_description || '',
      full_text: blog.full_text || '',
      auther: blog.auther || '',
      hashtags: blog.hashtags || '',
    })
    setEditingId(blog.id)
    setShowForm(true)
  }

  // Handle logout
  const handleLogout = async () => {
    setLoggingOut(true)
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Logout error:', error)
      setLoggingOut(false)
      return
    }
    setLoggingOut(false)
    window.location.href = '/pages/login' // redirect to login
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>

      {/* Buttons: Add Blog + Logout */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Blog
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          disabled={loggingOut}
        >
          {loggingOut ? 'Logging out...' : 'Logout'}
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => { setShowForm(false); setEditingId(null) }}
              className="absolute top-2 right-2 text-gray-600"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{editingId ? 'Edit Blog' : 'Add Blog'}</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
              />
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block mb-1">Cover Image</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e, 'cover_image')}
                    className="w-full px-3 py-2 border rounded"
                  />
                  {formData.cover_image && (
                    <img src={formData.cover_image} alt="Cover" className="mt-1 h-20 object-cover rounded" />
                  )}
                </div>
                <div className="flex-1">
                  <label className="block mb-1">Heading Image</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e, 'heading_image')}
                    className="w-full px-3 py-2 border rounded"
                  />
                  {formData.heading_image && (
                    <img src={formData.heading_image} alt="Heading" className="mt-1 h-20 object-cover rounded" />
                  )}
                </div>
              </div>

              <textarea
                placeholder="Short Description"
                value={formData.short_description}
                onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                rows={2}
              />
              <textarea
                placeholder="Full Text"
                value={formData.full_text}
                onChange={(e) => setFormData({ ...formData, full_text: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                rows={4}
              />
              <input
                type="text"
                placeholder="Auther"
                value={formData.auther}
                onChange={(e) => setFormData({ ...formData, auther: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Hashtags (comma-separated)"
                value={formData.hashtags}
                onChange={(e) => setFormData({ ...formData, hashtags: e.target.value })}
                className="w-full px-3 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded"
              >
                {editingId ? 'Update Blog' : 'Add Blog'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Blogs Table */}
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Title</th>
              <th className="border px-3 py-2">Auther</th>
              <th className="border px-3 py-2">Hashtags</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td className="border px-3 py-2">{blog.id}</td>
                <td className="border px-3 py-2">{blog.title}</td>
                <td className="border px-3 py-2">{blog.auther}</td>
                <td className="border px-3 py-2">{blog.hashtags}</td>
                <td className="border px-3 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
