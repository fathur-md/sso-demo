import { Bar } from "@components/dashboard/Bar";
import { MainBg } from "@components/MainBg";
import { MainLogo } from "@components/MainLogo";
import { user } from "@utils/mockupData";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "Selamat Pagi";
  if (hour >= 11 && hour < 15) return "Selamat Siang";
  if (hour >= 15 && hour < 18) return "Selamat Sore";
  return "Selamat Malam";
}

export const Dashboard = () => {
  return (
    <div className="relative flex h-dvh">
      <MainBg />
      <div className="mx-auto h-full w-full overflow-y-auto border md:flex md:max-w-5xl">
        <Bar />
        <div className="relative z-10 max-md:pt-12">
          <div className="mx-auto space-y-6 p-4">
            {/* ALERT */}
            <div className="from mx-auto max-w-lg rounded-lg bg-gradient-to-r from-yellow-300/60 to-yellow-300/70 p-4 text-sm text-zinc-950 backdrop-blur-md">
              <p>{user.news}</p>
            </div>
            {/* WELCOME */}
            <div className="glass-bg-secondary mx-auto max-w-lg space-y-2 rounded-lg p-4">
              <h1 className="">
                {getGreeting()} dan Selamat Datang di Portal SSO UMBY, Have a
                Good Day <span className="font-semibold">{user.name}</span> ! 👋
              </h1>
            </div>
            {/* PROFILE */}
            <div className="glass-bg relative mx-auto max-w-xs space-y-2 rounded-lg p-8 backdrop-blur-md">
              <div className="flex size-22 items-center justify-center rounded-full bg-gray-400">
                <span className="text-4xl text-gray-200">{user.initial}</span>
              </div>
              <h1 className="pt-8 text-2xl font-semibold tracking-tight">
                {user.name}
              </h1>
              <p className="text-sm text-gray-600">
                {user.email ? user.email : "No email provided"}
              </p>
            </div>
            <div className="glass-bg relative mx-auto max-w-xs space-y-2 rounded-lg p-8 backdrop-blur-md">
              <div className="flex size-22 items-center justify-center rounded-full bg-gray-400">
                <span className="text-4xl text-gray-200">{user.initial}</span>
              </div>
              <h1 className="pt-8 text-2xl font-semibold tracking-tight">
                {user.name}
              </h1>
              <p className="text-sm text-gray-600">
                {user.email ? user.email : "No email provided"}
              </p>
            </div>
            <div className="glass-bg relative mx-auto max-w-xs space-y-2 rounded-lg p-8 backdrop-blur-md">
              <div className="flex size-22 items-center justify-center rounded-full bg-gray-400">
                <span className="text-4xl text-gray-200">{user.initial}</span>
              </div>
              <h1 className="pt-8 text-2xl font-semibold tracking-tight">
                {user.name}
              </h1>
              <p className="text-sm text-gray-600">
                {user.email ? user.email : "No email provided"}
              </p>
            </div>
            <div className="glass-bg relative mx-auto max-w-xs space-y-2 rounded-lg p-8 backdrop-blur-md">
              <div className="flex size-22 items-center justify-center rounded-full bg-gray-400">
                <span className="text-4xl text-gray-200">{user.initial}</span>
              </div>
              <h1 className="pt-8 text-2xl font-semibold tracking-tight">
                {user.name}
              </h1>
              <p className="text-sm text-gray-600">
                {user.email ? user.email : "No email provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
