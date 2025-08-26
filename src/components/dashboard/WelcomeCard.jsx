import { AlertTriangleIcon } from "lucide-react";

export const WelcomeCard = ({ user, data }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 max-md:pt-8 md:grid-cols-[1fr_auto]">
      <div className="glass-bg shadow-card flex w-full cursor-pointer flex-col justify-between rounded-lg p-4 transition-all hover:scale-[102%] active:scale-100 max-md:max-w-sm max-sm:mx-auto">
        <p className="pb-6 text-sm">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="flex flex-wrap text-2xl font-semibold sm:text-3xl">
          <span className="">{getGreeting()},&nbsp;&nbsp;</span>
          <span className="">{user?.name || "Muhammad Fathurrahman"} ! 👋</span>
        </h1>
      </div>

      <div className="glass-bg shadow-card w-full max-w-sm cursor-pointer space-y-2 rounded-lg p-4 transition-all hover:scale-[102%] active:scale-100 max-md:mx-auto">
        <span className="inline-flex items-center gap-2 font-semibold text-yellow-600 dark:text-yellow-400">
          <AlertTriangleIcon className="size-5" />
          Perhatian
        </span>
        <p className="text-sm">{data?.news}</p>
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
