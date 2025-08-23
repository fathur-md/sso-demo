import { WelcomeCard } from "@components/dashboard/WelcomeCard";
import { useAuth } from "@hooks/useAuth";

export const DashboardContent = () => {
  const user = useAuth();
  return (
    <div className="h-[200vh] w-full">
      <div>
        <WelcomeCard user={user} />
      </div>
    </div>
  );
};
