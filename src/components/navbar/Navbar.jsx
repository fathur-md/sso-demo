import { useLogout } from "@hooks/useLogout";

export const Navbar = ({ user, activePage, setActivePage }) => {
  const logout = useLogout();

  return (
    <div className="fixed inset-x-0 top-0 z-50 md:hidden">
      <div className="flex h-12 items-center justify-between gap-2 bg-white/75 px-4 backdrop-blur-xl">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActivePage("dashboard")}
            className="rounded-lg bg-blue-900 p-2 px-3 text-sm text-white"
          >
            Dashboard
          </button>
          <button
            onClick={() => setActivePage("reset-password")}
            className="rounded-lg bg-blue-900 p-2 px-3 text-sm text-white"
          >
            Reset Password
          </button>
          <button
            onClick={logout}
            className="rounded-lg bg-red-700 p-2 px-3 text-sm text-white"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};
