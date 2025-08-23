import { DashboardContent } from "@components/dashboard/DashboardContent";
import { ResetPasswordContent } from "@components/dashboard/ResetPasswordContent";

export const Dashboard = ({ activeContent, data, isLoading, error }) => {
  return (
    <div className="p-4 md:p-0">
      {activeContent === "dashboard" ? (
        <DashboardContent data={data} isLoading={isLoading} error={error} />
      ) : activeContent === "reset-password" ? (
        <ResetPasswordContent />
      ) : (
        <h1 className="text-2xl font-bold">Page Not Found</h1>
      )}
    </div>
  );
};
