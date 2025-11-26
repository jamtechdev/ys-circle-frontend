'use client'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/lib/theme'
import { ReduxProvider } from '@/redux/provider'
import AuthLayout from '@/components/layout/AuthLayout'
import DashboardLayout from '@/components/layout/DashboardLayout'
import './globals.css'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  
  const authRoutes = ['/login', '/register', '/forgot-password', '/reset-password']
  const isAuthRoute = authRoutes.includes(pathname)

  return (
    <html lang="en" suppressHydrationWarning>
      <body id="root" suppressHydrationWarning>
        <ReduxProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {isAuthRoute ? (
              <AuthLayout>{children}</AuthLayout>
            ) : (
              <DashboardLayout>{children}</DashboardLayout>
            )}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
