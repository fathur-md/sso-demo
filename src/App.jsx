import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "@pages/Login";
import { fakeAuth } from "@utils/auth";

import { Layout } from "@layouts/Layout";
import { Dashboard } from "@pages/Dashboard";

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
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}
