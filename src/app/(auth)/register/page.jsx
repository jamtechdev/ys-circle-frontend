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

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [localError, setLocalError] = useState('')
  const { register, loading, error, clearError, isAuthenticated, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.roles?.length === 1) {
        router.push(`/${user.roles[0]}/dashboard`)
      } else if (user.roles?.length > 1) {
        router.push('/select-role')
      }
    }
  }, [isAuthenticated, user, router])

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
    await register(name, email, password, passwordConfirmation)
  }

  return (
    <Box className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gradient-to-br tw-from-slate-800 tw-to-indigo-500">
      <Paper elevation={4} className="tw-w-full tw-max-w-lg tw-px-8 tw-py-10 tw-rounded-2xl tw-shadow-xl">
        <Typography variant="h4" className="tw-mb-2 tw-text-center tw-font-bold tw-text-indigo-500">
          Register
        </Typography>
        <Typography variant="body2" className="tw-mb-6 tw-text-center tw-text-gray-400">
          Create a new account
        </Typography>
        {(localError || error) && (
          <Alert severity="error" className="tw-mb-4" onClose={() => {
            clearError()
            setLocalError('')
          }}>
            {localError || error}
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
            autoComplete="name"
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
            autoComplete="email"
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
            autoComplete="new-password"
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
            autoComplete="new-password"
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            size="large"
            className="tw-bg-indigo-500 tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-mb-2 tw-transition-colors hover:tw-bg-indigo-600"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Register'}
          </Button>
        </Box>
        <Box className="tw-mt-4 tw-text-center">
          <Typography variant="body2" className="tw-text-gray-500">
            Already have an account?{' '}
            <MuiLink component={Link} href="/login" className="tw-text-indigo-500 tw-font-semibold hover:tw-underline">
              Login here
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}
