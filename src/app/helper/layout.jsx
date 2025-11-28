"use client";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

export default function HelperLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user?.roles?.includes("helper")) {
        if (user?.roles?.length > 0) {
          router.push(`/${user.roles[0]}/dashboard`);
        } else {
          router.push("/login");
        }
      }
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <Box className=" flex  items-center  justify-center  min-h-screen">
        <CircularProgress />
      </Box>
    );
  }
  return (
    // ✅ NO HelperSidebar here!
    <>{children}</>
  );
}
