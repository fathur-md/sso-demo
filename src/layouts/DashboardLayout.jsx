import { ContentLayout } from "@layouts/ContentLayout";
import { Sidebar } from "@components/dashboard/Sidebar";
import { useState } from "react";

export const DashboardLayout = ({ user, data, isLoading, error }) => {
  const [activePage, setActivePage] = useState("dashboard");
  return (
    <div className="relative z-40 flex flex-1">
      {/* Sidebar*/}
      <aside className="hidden w-64 shrink-0 p-6 pr-0 md:block">
        <Sidebar
          isLoading={isLoading}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </aside>
      {/* Content */}
      <div className="flex min-w-0 flex-1 p-4 md:p-6">
        <ContentLayout
          user={user}
          data={data}
          isLoading={isLoading}
          error={error}
          activePage={activePage}
        />
      </div>
    </div>
  );
};
