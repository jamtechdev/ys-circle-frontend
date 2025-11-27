'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../hooks/useAuth'
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && user) {
      router.push(`/${user.roles[0]}/dashboard`)
    }
  }, [user, loading, router])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Welcome to YS Circle
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Your complete platform for educational and career guidance
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#7c3aed', mr: 2 }}
            onClick={() => router.push('/register')}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ borderColor: 'white', color: 'white' }}
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#059669' }}>
                  Multi-Role Dashboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Coordinator, Helper, and Recipient roles with custom dashboards
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#7c3aed' }}>
                  Smart Navigation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Intelligent merged sidebar for users with multiple roles
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#f59e0b' }}>
                  Secure & Scalable
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Built with Next.js, Redux, and Material UI for performance
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  )
}
