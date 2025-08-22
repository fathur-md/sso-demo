import { DashboardLayout } from "@layouts/DashboardLayout";
import { MainBg } from "@components/MainBg";
import { useAuth } from "@hooks/useAuth";
import { useDelayedLoading } from "@hooks/useDelayedLoading";
import { fetchMenuApp } from "@services/fetchData";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@components/navbar/Navbar";
import { useState } from "react";

export const Dashboard = () => {
  const user = useAuth();
  const [activePage, setActivePage] = useState("dashboard");

  const {
    data,
    isLoading: queryLoading,
    error,
  } = useQuery({
    queryKey: ["menu", user?.id],
    queryFn: () => fetchMenuApp(user?.id),
  });

  const isLoading = useDelayedLoading(queryLoading, 1000);

  return (
    <div className="relative flex min-h-dvh flex-col">
      <MainBg />
      <Navbar
        user={user}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <DashboardLayout
        user={user}
        data={data}
        isLoading={isLoading}
        error={error}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
};
