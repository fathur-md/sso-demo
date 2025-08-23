export const WelcomeCard = ({ user }) => {
  return (
    <div className="rounded-lg bg-white/80 p-4 backdrop-blur-md">
      <p className="text-sm text-gray-500">
        {new Date().toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="mt-8">
        <h1 className="text-2xl">
          {getGreeting()},{" "}
          <span className="font-medium">{user?.name || "User"}</span>
        </h1>
        <p>
          
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
