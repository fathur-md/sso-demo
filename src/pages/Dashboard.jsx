import { Bar } from "@components/dashboard/Bar";

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("auth"));

  if (!user) {
    return <p>User not found, please log in again</p>;
  }

  return (
    <div>
      <Bar user={user} />
      <div>
        {/* BAR SIDE & TOP */}

        {/* CONTENT */}
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
