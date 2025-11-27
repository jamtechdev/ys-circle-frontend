'use client'
import { Container, Typography, Box } from '@mui/material'
import LandingLayout from '../../components/layout/LandingLayout'

export default function AboutPage() {
  return (
    <LandingLayout>
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 'bold' }}>
          About YS Circle
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          YS Circle is a comprehensive platform designed to connect students, educators, and career coordinators.
        </Typography>
        <Typography variant="body1">
          Our mission is to provide seamless guidance and support for educational and career development.
        </Typography>
      </Container>
    </LandingLayout>
  )
}
