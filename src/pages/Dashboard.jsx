import { Content } from "@components/dashboard/Content";
import { Navbar } from "@components/dashboard/Navbar";
import { Sidebar } from "@components/dashboard/Sidebar";
import { MainBg } from "@components/MainBg";
import { fetchMenuApp } from "@services/fetchData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  const {
    data,
    isLoading: queryLoading,
    error,
  } = useQuery({
    queryKey: ["data"],
    queryFn: fetchMenuApp,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!queryLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate loading delay
      return () => clearTimeout(timer);
    }
  }, [queryLoading]);

  return (
    <div className="flex min-h-dvh p-4 md:p-6">
      <MainBg />
      <Navbar user={user} />
      <div className="relative z-40 flex w-full flex-col gap-4 transition-all max-md:pt-18 md:flex-row">
        {/* BAR SIDE & TOP */}
        <div className="hidden md:flex">
          <Sidebar user={user} data={data} isLoading={isLoading} />
        </div>
        {/* CONTENT */}
        <div className="flex flex-1">
          <Content
            user={user}
            data={data}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};
