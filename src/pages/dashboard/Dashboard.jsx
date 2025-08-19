import { fakeAuth } from "@utils/auth";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fakeAuth.logout(() => {
      navigate("/");
    });
  };

  return (
    <div className="flex min-h-dvh p-10">
      <div className="flex w-full rounded-lg bg-gray-50 p-4">
        <div className="flex w-full items-start justify-between">
          <h1>Dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-blue-900 px-8 py-2 text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
