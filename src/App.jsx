import { Dashboard } from "@pages/Dashboard";
import { Login } from "@pages/Login";
import { fakeAuth } from "@utils/auth";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

function ProtectedRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/" replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
