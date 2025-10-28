import toast from "react-hot-toast";
import { Navigate } from "react-router";
import { useAuth } from "../context/Auth";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="loader"></div>;

  if (!user && !loading) {
    toast.error("Your session has expired — please log in again.");
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};
