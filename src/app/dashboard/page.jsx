'use client'
import { useAuth } from '@/hooks/useAuth'
import { 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Box 
} from '@mui/material'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <Box>
      <Typography variant="h4" className="tw-mb-6">
        Dashboard
      </Typography>
      
      <Typography variant="h6" className="tw-mb-4">
        Welcome back, {user?.name}!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Total Users
              </Typography>
              <Typography variant="h3">
                150
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="secondary">
                Total Orders
              </Typography>
              <Typography variant="h3">
                89
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="success.main">
                Revenue
              </Typography>
              <Typography variant="h3">
                $12,450
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
