import { ContentAnim } from "@components/animations/ContentAnim";
import { MenuApp } from "@components/dashboard/MenuApp";
import { ProfileCard } from "@components/dashboard/ProfileCard";
import { WelcomeCard } from "@components/dashboard/WelcomeCard";
import { useAuth } from "@hooks/useAuth";

export const DashboardContent = ({ data, isLoading, error }) => {
  const user = useAuth();
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <WelcomeCard user={user} data={data} />
        {/* <ProfileCard user={user} data={data} /> */}
        <MenuApp />
      </div>
    </div>
  );
};
