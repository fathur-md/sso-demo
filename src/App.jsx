import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@pages/Dashboard";
import { Login } from "@pages/Login";
import { fakeAuth } from "@utils/auth";

// Protected route wrapper
function ProtectedRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}
