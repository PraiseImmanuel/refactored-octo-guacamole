import ProtectedRoutes from "@/features/layout/protected-routes-container";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <ProtectedRoutes>{children}</ProtectedRoutes>;
};

export default Layout;
