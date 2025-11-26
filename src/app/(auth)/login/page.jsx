'use client'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useRouter } from 'next/navigation'
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Link as MuiLink,
  CircularProgress,
} from '@mui/material'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading, error, clearError, isAuthenticated, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated && user) {
      // Redirect based on user.roles array
      if (user.roles?.length === 1) {
        router.push(`/${user.roles[0]}/dashboard`)
      } else if (user.roles?.length > 1) {
        router.push('/select-role')
      }
    }
  }, [isAuthenticated, user, router])

  useEffect(() => clearError, [clearError])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <Paper elevation={3} className="tw-p-8 tw-w-full tw-max-w-md tw-mx-auto">
      <Typography variant="h4" className="tw-mb-2 tw-text-center">
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

      <Alert severity="info" className="tw-mb-4">
        <Typography variant="caption" className="tw-block tw-font-bold tw-mb-1">
          Test Accounts:
        </Typography>
        <Typography variant="caption" className="tw-block">Coordinator: sarah@hospital.com</Typography>
        <Typography variant="caption" className="tw-block">Helper: mike@example.com</Typography>
        <Typography variant="caption" className="tw-block">Recipient: emily@example.com</Typography>
        <Typography variant="caption" className="tw-block tw-mt-1">Password: password</Typography>
      </Alert>

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
