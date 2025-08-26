import { useState } from "react";
import { MainBg } from "@components/MainBg";
import { Dashboard } from "@pages/Dashboard";
import { Navbar } from "@components/navigation/Navbar";
import { Sidebar } from "@components/navigation/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboard } from "@services/fetchData";

export const DashboardLayout = () => {
  const [activeContent, setActiveContent] = useState("dashboard");
  const { data, isLoading, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
  });

  return (
    <>
      <div className="fixed inset-0">
        <MainBg />
      </div>
      <Navbar setActiveContent={setActiveContent} />
      <div className="relative z-10 grid gap-4 pt-12 lg:grid-cols-[14rem_1fr] lg:p-4">
        <Sidebar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        <Dashboard
          activeContent={activeContent}
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </>
  );
};
