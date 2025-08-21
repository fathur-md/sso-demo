import { Avatar } from "@components/dashboard/Avatar";
import { AlertTriangle } from "lucide-react";

export const Content = ({ user, data, isLoading, error }) => {
  return (
    <div className="w-full">
      <div className="space-y-4 space-x-4">
        {/* Welcome card */}
        <div className="glass-bg w-full max-w-sm overflow-hidden rounded-lg max-md:mx-auto md:max-w-lg">
          <div>
            {/* LOADING STATE */}
            {isLoading && (
              <div
                role="status"
                className="animate-pulse space-y-8 p-4 md:flex md:items-center md:space-y-0 md:space-x-8 rtl:space-x-reverse"
              >
                <div className="w-full">
                  <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                  <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                  <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                  <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                  <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                  <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                </div>
              </div>
            )}

            {/* ERROR STATE */}
            {error && (
              <h1 className="text-sm leading-normal">
                <span className="text-red-500">
                  Error: {error?.message || "Something went wrong"}
                </span>
              </h1>
            )}

            {/* SUCCESS STATE */}
            {!isLoading && !error && data && (
              <div className="space-y-3 p-3">
                <h1 className="relative pl-4 text-sm after:absolute after:top-0 after:left-0 after:h-full after:w-1.5 after:rounded-full after:bg-blue-900 md:text-lg">
                  {getGreeting()}{" "}
                  <span>
                    dan Selamat Datang di Portal SSO UMBY, Have a Good Day
                  </span>{" "}
                  <span className="font-semibold">{user.name}! 👋</span>
                </h1>

                <div className="shadow-morph space-y-2 rounded-md bg-amber-300 p-3 text-sm">
                  <p className="flex items-center gap-2 font-semibold text-gray-700">
                    <AlertTriangle className="size-4 text-gray-700" />
                    Perhatian
                  </p>
                  <p className="text-gray-800">{data.news}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Profile Card */}
        <div className="w-full max-w-sm overflow-hidden rounded-lg max-md:mx-auto md:max-w-lg">
          <div className="glass-bg space-y-4 p-4 pt-8 pl-8">
            <div>
              {user.img ? (
                <img src={user?.img} alt="" />
              ) : (
                <Avatar
                  user={user}
                  className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-900 text-3xl"
                />
              )}
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold tracking-tight">
                {user.name}
              </h1>
              <p className="text-sm text-gray-700">{user.email}</p>
            </div>
          </div>
        </div>
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
