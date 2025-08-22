export const MainContent = ({ user, data, isLoading, error }) => {
  return (
    <div className="w-full">
      <div className="glass-bg flex h-full flex-col items-center justify-center rounded-lg p-4 text-center">
        <h1>Main Content Component</h1>
        <h1>Coming soon</h1>
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
