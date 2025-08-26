import { MainLogo } from "@components/MainLogo";
import { useLogout } from "@hooks/useLogout";

export const Navbar = ({ setActiveContent }) => {
  const logout = useLogout();

  return (
    <div className="fixed inset-x-0 top-0 z-50 lg:hidden">
      <div className="glass-bg flex h-11 items-center justify-between gap-2 px-4">
        <div>
          <img
            src="https://skalastreskerja.mercu.id/wp-content/uploads/2020/10/logonoback.png"
            alt=""
            className="h-6 w-auto"
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveContent("dashboard")}
            className="rounded-lg bg-blue-900 p-1 px-3 text-sm text-white"
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveContent("reset-password")}
            className="rounded-lg bg-blue-900 p-1 px-3 text-sm text-white"
          >
            Reset Password
          </button>
          <button
            onClick={logout}
            className="rounded-lg bg-red-700 p-1 px-3 text-sm text-white"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

// export const Navbar = () => {
//   return (
//     <nav className="glass-bg fixed inset-x-0 z-20 lg:hidden">
//       <div className="h-12"></div>
//     </nav>
//   );
// };
