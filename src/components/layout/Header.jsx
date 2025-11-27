'use client'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #1e293b, #059669)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          YS Circle
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => router.push('/login')}>
            Login
          </Button>
          <Button 
            variant="contained" 
            sx={{ ml: 2, backgroundColor: '#7c3aed' }}
            onClick={() => router.push('/register')}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
