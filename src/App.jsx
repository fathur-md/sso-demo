import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { fakeAuth } from "@utils/auth";
import { DashboardLayout } from "@layouts/DashboardLayout";
import { Login } from "@pages/Login";
import { Test } from "@components/debug/Test";

// Protected route wrapper
function ProtectedRoute({ children }) {
  return fakeAuth.isAuthenticated ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Test />} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}
