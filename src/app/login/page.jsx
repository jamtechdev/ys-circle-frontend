'use client'
import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  Alert,
  Link as MuiLink,
  CircularProgress
} from '@mui/material'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading, error, clearError, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    return () => clearError()
  }, [clearError])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await login(email, password)
    if (success) {
      router.push('/dashboard')
    }
  }

  return (
    <Paper elevation={3} className="tw-p-8 tw-w-full">
      <Typography variant="h4" component="h1" className="tw-mb-2 tw-text-center">
        Login
      </Typography>
      <Typography variant="body2" className="tw-mb-6 tw-text-center tw-text-gray-600">
        Welcome back! Please login to your account
      </Typography>

      {error && (
        <Alert severity="error" className="tw-mb-4" onClose={clearError}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="tw-mb-4"
          disabled={loading}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="tw-mb-6"
          disabled={loading}
        />
        <Button 
          fullWidth 
          variant="contained" 
          type="submit"
          size="large"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
      </Box>

      <Box className="tw-mt-4 tw-text-center">
        <Typography variant="body2">
          Don't have an account?{' '}
          <MuiLink component={Link} href="/register">
            Register here
          </MuiLink>
        </Typography>
      </Box>
    </Paper>
  )
}
