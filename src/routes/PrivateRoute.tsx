import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

interface PrivateRouteProps {
  allowedRoles?: ["USER", "MEMBER", "ADMIN"];
}

const PrivateRoute = ({ allowedRoles }: PrivateRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
