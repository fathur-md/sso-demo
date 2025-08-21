import { Avatar } from "@components/dashboard/Avatar";
import { Error } from "@components/Error";
import { LoadingDiv } from "@components/LoadingDiv";
import { AlertTriangle } from "lucide-react";
import { use } from "react";

export const Content = ({ user, data, isLoading, error }) => {
  return (
    <div className="w-full">
      <div className="space-y-4 space-x-4">
        {/* Welcome card */}
        <div className="w-full">
          <div className="glass-bg max-w-sm overflow-hidden rounded-lg max-md:mx-auto md:max-w-lg">
            {/* LOADING STATE */}
            {isLoading && <LoadingDiv />}

            {/* ERROR STATE */}
            {error && <Error error={error} />}

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
        {/* Profile Card & Ringkasan */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="glass-bg m w-full max-w-sm overflow-hidden rounded-lg max-md:mx-auto md:max-w-lg">
            {/* LOADING STATE */}
            {isLoading && <LoadingDiv divLength={4} />}

            {/* SUCCES */}
            {!isLoading && (
              <div className="space-y-4 p-4 pt-8 pl-8">
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
                <div className="space-y-1">
                  <h1 className="text-3xl font-semibold tracking-tight">
                    {user.name}
                  </h1>
                  <p className="text-sm text-gray-700">{user.email}</p>

                  <p className="text-sm font-bold text-gray-700">
                    Semester {user.semester} - {user.prodi}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="w-full max-w-sm space-y-2 rounded-lg bg-gray-50/90 px-4 py-3 backdrop-blur-xl max-md:mx-auto md:max-w-lg">
            <h1 className="text-lg font-semibold">Ringkasan Akademik</h1>
            <div className="flex w-full justify-around space-y-1 text-sm font-semibold text-zinc-900">
              <p className="p-2">IPK: {user.ipk}</p>
              <span className="min-h-full border border-gray-500"></span>
              <p className="p-2">SKS: {user.sks}/144</p>
              <span className="min-h-full border border-gray-500"></span>
              <p className="p-2">SKS: {user.sks}/144</p>
            </div>
            {/* GRAFIK */}
            <div className="flex flex-col items-center gap-4">
              {/* Grafik Batang (Bar Progress) */}
              <div className="w-full">
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Progress SKS
                </label>
                <div className="relative h-6 w-full rounded-full bg-gray-200">
                  <div
                    className="absolute top-0 left-0 h-6 rounded-full bg-blue-600 transition-all"
                    style={{ width: `${(user.sks / 144) * 100}%` }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    {user.sks}/144 SKS
                  </span>
                </div>
              </div>
              {/* Grafik Lingkaran (Circular Progress) */}
              <div className="flex flex-col items-center">
                <label className="mb-1 block text-xs font-medium text-gray-800">
                  IPK Progress
                </label>
                <svg width={100} height={100} viewBox="0 0 60 60">
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="6"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeDasharray={2 * Math.PI * 26}
                    strokeDashoffset={
                      2 * Math.PI * 26 * (1 - Math.min(user.ipk / 4, 1))
                    }
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.5s" }}
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="1rem"
                    fill="#2563eb"
                    fontWeight="bold"
                  >
                    {user.ipk}
                  </text>
                </svg>
              </div>
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
