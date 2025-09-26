'use client'

import { supabase } from '../../supabaseClient'
import { useEffect, useState } from 'react'
import AdminBlogPage from './AdminBlogPage'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Check user session
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [])

  // Redirect to login if no user
  useEffect(() => {
    if (!loading && !user) {
      router.push('/pages/login')
    }
  }, [loading, user, router])

  if (loading) {
    return <p className="text-center mt-20 text-xl">⏳ Checking session...</p>
  }

  if (!user) {
    return null
  }

  return (
    <div className="p-10">
      <AdminBlogPage /> {/* Logout button is now inside this component */}
    </div>
  )
}
