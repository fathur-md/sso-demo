import { MainLogo } from "@components/MainLogo";
import { useLogout } from "@hooks/useLogout";
import { LayoutDashboard, LockKeyholeOpen } from "lucide-react";

const sidebarContent = [
  { title: "Dashboard", icon: LayoutDashboard, id: "dashboard" },
  { title: "Reset Password", icon: LockKeyholeOpen, id: "reset-password" },
];

export const Sidebar = ({ activeContent, setActiveContent }) => {
  const logout = useLogout();

  return (
    <div className="hidden lg:block">
      <div className="bg-white/80# backdrop-blur-xl# glass-bg sticky top-4 min-h-[calc(100vh-32px)] overflow-y-scroll rounded-lg">
        <div className="pt-4 pb-2">
          <MainLogo className="pointer-events-none mx-auto w-30" />
          <h1 className="px-2 text-center text-lg font-medium text-blue-900 dark:text-gray-200">
            Single Sign On UMBY
          </h1>
        </div>
        <div className="space-y-2 px-2 py-4 text-slate-700">
          {sidebarContent.map(({ title, icon: Icon, id }) => (
            <SidebarMenu
              key={id}
              Icon={Icon}
              title={title}
              id={id}
              activeContent={activeContent}
              setActiveContent={setActiveContent}
            />
          ))}
        </div>
        <div className="p-4">
          <button
            onClick={logout}
            className="w-full rounded-md bg-red-700 py-2 text-sm font-semibold text-gray-200 hover:bg-red-800"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarMenu = ({ Icon, title, id, activeContent, setActiveContent }) => {
  const selected = activeContent === id;

  const baseClasses =
    "flex w-full items-center gap-2 rounded-lg p-2 text-sm transition-all";
  const selectedClasses =
    "bg-blue-900 font-medium text-slate-200 hover:bg-blue-950 dark:hover:bg-blue-800";
  const defaultClasses =
    "text-slate-700 dark:text-gray-400 hover:bg-white/30 dark:hover:bg-gray-800";

  return (
    <button
      onClick={() => setActiveContent(id)}
      className={`${baseClasses} ${selected ? selectedClasses : defaultClasses}`}
    >
      <Icon className="size-6" />
      <span>{title}</span>
    </button>
  );
};
