'use client'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import CoordinatorSidebar from '../../components/layout/CoordinatorSidebar'

export default function CoordinatorLayout({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      // Only allow access for "coordinator" role
      if (!user?.roles?.includes('coordinator')) {
        if (user?.roles?.length > 0) {
          router.push(`/${user.roles[0]}/dashboard`)
        } else {
          router.push('/login')
        }
      }
    }
  }, [user, loading, router])

  if (loading || !user) {
    return (
      <Box className="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
        <CircularProgress />
      </Box>
    )
  }

  // All coordinator child pages now protected!
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* <CoordinatorSidebar /> */}
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  )
}
