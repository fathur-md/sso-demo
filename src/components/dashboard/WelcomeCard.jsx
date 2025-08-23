import { AlertTriangleIcon } from "lucide-react";

export const WelcomeCard = ({ user, data }) => {
  return (
    <div className="w-full">
      <p className="p-4 text-sm text-gray-200">
        {new Date().toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="p-2">
        <h1 className="p-2 text-2xl font-medium text-gray-200">
          {getGreeting()}, <span>{user?.name || "User"} ! 👋</span>
        </h1>
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
