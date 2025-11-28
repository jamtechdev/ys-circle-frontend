"use client";
import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useRouter } from "next/navigation";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  FormControlLabel,
  Link as MuiLink,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import {
  CheckBox,
  Diversity1,
  Favorite,
  HeadsetSharp,
} from "@mui/icons-material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, clearError, isAuthenticated, user } =
    useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (isAuthenticated && user) {
  //     // Redirect based on user.roles array
  //     if (user.roles?.length === 1) {
  //       router.push(`/${user.roles[0]}/dashboard`)
  //     } else if (user.roles?.length > 1) {
  //       router.push('/select-role')
  //     }
  //   }
  // }, [isAuthenticated, user, router])

  // useEffect(() => clearError, [clearError])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await login(email, password)
  // }

  return (
    <Paper elevation={3} className="p-8 w-full max-w-md mx-auto !rounded-lg">
      <div className="text-center mb-8">
        <img
          className="m-auto w-[160px] mb-6"
          src="/assets/img/logo.png"
          alt="My image"
        />

        <Typography
          variant="h4"
          className="mb-2 !font-black text-black text-center font-nunito-2 !text-[26px]"
        >
          Welcome Back
        </Typography>
        <Typography variant="body2" className="mb-6 text-center text-gray-600">
          Sign in to your Support Circle account.
        </Typography>
      </div>

      {error && (
        <Alert severity="error" className="mb-4" onClose={clearError}>
          {error}
        </Alert>
      )}

      <Alert severity="info" className="mb-4">
        <Typography variant="caption" className="block font-bold mb-1">
          Test Accounts:
        </Typography>
        <Typography variant="caption" className="block">
          Coordinator: sarah@hospital.com
        </Typography>
        <Typography variant="caption" className="block">
          Helper: mike@example.com
        </Typography>
        <Typography variant="caption" className="block">
          Recipient: emily@example.com
        </Typography>
        <Typography variant="caption" className="block mt-1">
          Password: password
        </Typography>
      </Alert>

      <Box component="form">
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="!mb-4"
          disabled={loading}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="!mb-4"
          disabled={loading}
        />
        <div className="flex gap-2 items-center mb-6">
          <CheckBox></CheckBox>
          <Typography variant="body2">Remember me</Typography>
        </div>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          className="theme-btn-primary !rounded-[30px] !ring-0"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </Box>

      <Box className="mt-4 text-center">
        <Typography variant="body2">
          Don't have an account?{" "}
          <MuiLink component={Link} href="/register">
            Register here
          </MuiLink>
        </Typography>
      </Box>
    </Paper>
  );
}
