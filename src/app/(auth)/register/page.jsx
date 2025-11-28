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
  Link as MuiLink,
  CircularProgress,
} from "@mui/material";
import {
  CheckBox,
  Diversity1,
  Favorite,
  HeadsetSharp,
} from "@mui/icons-material";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [localError, setLocalError] = useState("");
  const { register, loading, error, clearError, isAuthenticated, user } =
    useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (isAuthenticated && user) {
  //     if (user.roles?.length === 1) {
  //       router.push(`/${user.roles[0]}/dashboard`);
  //     } else if (user.roles?.length > 1) {
  //       router.push("/select-role");
  //     }
  //   }
  // }, [isAuthenticated, user, router]);

  // useEffect(() => {
  //   return () => {
  //     clearError();
  //     setLocalError("");
  //   };
  // }, [clearError]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLocalError("");
  //   if (password !== passwordConfirmation) {
  //     setLocalError("Passwords do not match");
  //     return;
  //   }
  //   await register(name, email, password, passwordConfirmation);
  // };

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
          Join Support Circle
        </Typography>
        <Typography variant="body2" className="mb-6 text-center text-gray-600">
          Create your account to start helping or get help.
        </Typography>
      </div>

      {(localError || error) && (
        <Alert
          severity="error"
          className=" mb-4"
          onClose={() => {
            clearError();
            setLocalError("");
          }}
        >
          {localError || error}
        </Alert>
      )}
      <Box component="form">
        <TextField
          fullWidth
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className=" !mb-4"
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
          className=" !mb-4"
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
          className=" !mb-4"
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
          className=" !mb-6"
          disabled={loading}
          autoComplete="new-password"
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          className="theme-btn-primary !rounded-[30px] !ring-0"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Register"}
        </Button>
      </Box>
      <Box className=" mt-4  text-center">
        <Typography variant="body2" className=" text-gray-500">
          Already have an account?{" "}
          <MuiLink
            component={Link}
            href="/login"
            className=" text-indigo-500  font-semibold hover: underline"
          >
            Login here
          </MuiLink>
        </Typography>
      </Box>
    </Paper>
  );
}
