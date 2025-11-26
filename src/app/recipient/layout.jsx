'use client'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import RecipientSidebar from '../../components/layout/RecipientSidebar'

export default function RecipientLayout({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user?.roles?.includes('recipient')) {
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
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* <RecipientSidebar /> */}
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  )
}
