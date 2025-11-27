'use client'
import { Box, Typography, Link as MuiLink } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#1e293b',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © 2025 YS Circle. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <MuiLink href="/about" color="inherit" underline="hover">About</MuiLink>
        {' | '}
        <MuiLink href="/contact" color="inherit" underline="hover">Contact</MuiLink>
        {' | '}
        <MuiLink href="/privacy" color="inherit" underline="hover">Privacy Policy</MuiLink>
      </Typography>
    </Box>
  )
}
