"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null && token !== undefined) {
      setIsAuthenticated(true);
    } else {
      router.push("/auth");
    }
  }, []);

  // Render based on authentication state
  if (isAuthenticated) {
    return <div>{children}</div>;
  }
};

export default ProtectedRoutes;
