'use client'
import { useAuth } from '../hooks/useAuth'
import { usePathname } from 'next/navigation'
import Sidebar from '../components/layout/Sidebar'
import AuthLayout from '../components/layout/AuthLayout'
import { Box, CircularProgress } from '@mui/material'

export default function ClientApp({ children }) {
  const pathname = usePathname()
  const { user, loading } = useAuth()

  if (pathname?.startsWith('/login') || pathname?.startsWith('/register')) {
    return <AuthLayout>{children}</AuthLayout>
  }

//   if (loading || !user) {
//     return (
//       <Box className="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
//         <CircularProgress />
//       </Box>
//     )
//   }

  const roleFromPath = pathname?.split('/')[1]
  if (roleFromPath && !user?.roles?.includes(roleFromPath)) {
    if (user?.roles?.length > 0) {
      window.location.href = `/${user.roles[0]}/dashboard`
      return null
    }
    window.location.href = `/login`
    return null
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar user={user} />
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  )
}
