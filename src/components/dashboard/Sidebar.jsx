import { MainLogo } from "@components/MainLogo";
import { useLogout } from "@hooks/useLogout";
import { LayoutDashboardIcon, LockKeyholeOpen } from "lucide-react";
import { act } from "react";

export const Sidebar = ({ isLoading, activePage, setActivePage }) => {
  const logout = useLogout();

  if (isLoading) {
    return (
      <div className="glass-bg h-full w-full animate-pulse space-y-4 rounded-lg p-4">
        {/* Skeleton Logo */}
        <div className="mx-auto h-36 w-40 rounded-lg bg-gray-400" />

        {/* Skeleton Menu */}
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`mx-auto rounded ${i % 2 !== 0 ? "h-4 bg-gray-500" : "h-3 bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <div className="glass-bg w-full space-y-4 rounded-lg">
        {/* Logo */}
        <MainLogo className="pointer-events-none mx-auto w-40 py-4" />
        {/* Menu */}
        <ul className="relative space-y-2 px-2 text-sm font-medium">
          <li className="cursor-pointer rounded transition-all">
            <button
              onClick={() => setActivePage("dashboard")}
              className={`flex w-full items-center gap-2 rounded p-2 transition-all ${activePage === "dashboard" ? "bg-blue-900 fill-gray-300 stroke-gray-300 text-gray-300" : "fill-blue-900 stroke-blue-900 text-blue-950"}`}
            >
              <LayoutDashboardIcon className="size-6 fill-inherit stroke-inherit" />
              Dashboard
            </button>
          </li>
          <li className="cursor-pointer rounded transition-all">
            <button
              onClick={() => setActivePage("reset-password")}
              className={`flex w-full items-center gap-2 rounded p-2 transition-all ${activePage === "reset-password" ? "bg-blue-900 stroke-gray-300 text-gray-300" : "stroke-blue-900 text-blue-950"}`}
            >
              <LockKeyholeOpen className="size-6 stroke-inherit" />
              Reset Password
            </button>
          </li>
        </ul>

        {/* Logout */}
        <div className="p-4">
          <button
            onClick={logout}
            className="w-full rounded bg-red-700 py-2 text-sm font-medium text-gray-200 hover:bg-red-800 active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// export const Sidebartest = ({ user, data, isLoading }) => {
//   return (
//     <div className="glass-bg rounded-xl p-4">
//       {isLoading && <LoadingDiv />}

//       {!isLoading && (
//         <div className="px-10">
//           <img
//             src="https://dpm.mercubuana-yogya.ac.id/wp-content/uploads/2022/10/cropped-Logo-Universitas-Mercu-Buana-Yogyakarta-UMBY-1080x993-removebg-preview.png"
//             alt="Sidebar logo"
//             className="mx-auto aspect-square w-30"
//           />
//           <div></div>
//         </div>
//       )}
//     </div>
//   );
// };
