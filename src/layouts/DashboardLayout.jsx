import { useState } from "react";
import { MainBg } from "@components/MainBg";
import { Dashboard } from "@pages/Dashboard";
import { Navbar } from "@components/navigation/Navbar";
import { Sidebar } from "@components/navigation/Sidebar";

export const DashboardLayout = () => {
  const [activeContent, setActiveContent] = useState("dashboard");

  return (
    <>
      <MainBg />
      <Navbar />
      <div className="relative z-10 grid gap-4 pt-12 md:grid-cols-[14rem_1fr] md:p-4">
        <Sidebar
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
        <Dashboard activeContent={activeContent} />
      </div>
    </>
  );
};
