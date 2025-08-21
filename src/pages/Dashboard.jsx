import { Content } from "@components/dashboard/Content";
import { Navbar } from "@components/dashboard/Navbar";
import { Sidebar } from "@components/dashboard/Sidebar";
import { MainBg } from "@components/MainBg";

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("auth"));

  if (!user) {
    return <p>User not found, please log in again</p>;
  }

  return (
    <div className="flex min-h-dvh p-4 md:p-6">
      <MainBg />
      <Navbar user={user} />
      <div className="relative z-40 flex w-full flex-col gap-4 max-md:pt-18 md:flex-row">
        {/* BAR SIDE & TOP */}
        <div className="hidden md:flex">
          <Sidebar user={user} />
        </div>
        {/* CONTENT */}
        <div className="flex flex-1">
          <Content user={user} />
        </div>
      </div>
    </div>
  );
};

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "Selamat Pagi";
  if (hour >= 11 && hour < 15) return "Selamat Siang";
  if (hour >= 15 && hour < 18) return "Selamat Sore";
  return "Selamat Malam";
}
