'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Container,
  IconButton,
  Menu,
  MenuItem,
  CircularProgress
} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

export default function DashboardLayout({ children }) {
  const { user, loading, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, loading, router])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    handleClose()
    await logout()
    router.push('/login')
  }

  if (loading) {
    return (
      <Box className="tw-flex tw-items-center tw-justify-center tw-min-h-screen">
        <CircularProgress />
      </Box>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <Box className="tw-min-h-screen tw-bg-gray-50">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {user?.name}
          </Typography>
          <div>
            <IconButton
              size="large"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className="tw-py-8">
        {children}
      </Container>
    </Box>
  )
}
