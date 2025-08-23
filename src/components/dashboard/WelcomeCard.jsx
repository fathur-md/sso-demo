import { AlertTriangleIcon } from "lucide-react";

export const WelcomeCard = ({ user, data }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-3 p-2 md:grid-cols-[1fr_auto]">
      <div className="">
        <p className="pb-6 text-sm text-gray-200">
          {new Date().toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="py-3 text-2xl font-medium text-gray-200">
          {getGreeting()}, <span>{user?.name || "User"} ! 👋</span>
        </h1>
      </div>
      <div className="md:max-w-sm">
        <div className="mb-2 flex items-center gap-1 font-medium">
          <AlertTriangleIcon className="inline size-4 text-amber-400" />
          <span className="text-sm text-amber-300">Perhatian</span>
        </div>
        <p className="rounded-lg bg-amber-300 p-2 py-1.5 text-sm">
          {data?.news}
        </p>
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
