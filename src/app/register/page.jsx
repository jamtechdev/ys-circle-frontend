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

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [localError, setLocalError] = useState('')
  const { register, loading, error, clearError, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    return () => {
      clearError()
      setLocalError('')
    }
  }, [clearError])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLocalError('')

    if (password !== passwordConfirmation) {
      setLocalError('Passwords do not match')
      return
    }

    const success = await register(name, email, password, passwordConfirmation)
    if (success) {
      router.push('/dashboard')
    }
  }

  const displayError = localError || error

  return (
    <Paper elevation={3} className="tw-p-8 tw-w-full">
      <Typography variant="h4" component="h1" className="tw-mb-2 tw-text-center">
        Register
      </Typography>
      <Typography variant="body2" className="tw-mb-6 tw-text-center tw-text-gray-600">
        Create a new account
      </Typography>

      {displayError && (
        <Alert severity="error" className="tw-mb-4" onClose={() => {
          clearError()
          setLocalError('')
        }}>
          {displayError}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="tw-mb-4"
          disabled={loading}
        />
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
          className="tw-mb-4"
          disabled={loading}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
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
          {loading ? <CircularProgress size={24} /> : 'Register'}
        </Button>
      </Box>

      <Box className="tw-mt-4 tw-text-center">
        <Typography variant="body2">
          Already have an account?{' '}
          <MuiLink component={Link} href="/login">
            Login here
          </MuiLink>
        </Typography>
      </Box>
    </Paper>
  )
}
