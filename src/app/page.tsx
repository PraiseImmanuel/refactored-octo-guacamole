import LandingPage from "@/features/landing";
import ProtectedRoutes from "@/features/layout/protected-routes-container";

export default function Home() {
  return (
    <>
      <ProtectedRoutes>
        <LandingPage />
      </ProtectedRoutes>
    </>
  );
}
