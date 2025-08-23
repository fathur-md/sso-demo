import { Avatar } from "@components/dashboard/Avatar";
import { MainLogo } from "@components/MainLogo";
import { GraduationCap } from "lucide-react";

export const ProfileCard = ({ user, data }) => {
  return (
    <div className="space-y-3">
      <div className="w-fit overflow-hidden rounded-lg border border-gray-600/30">
        <div className="flex items-center justify-center gap-2 bg-blue-900 px-3 py-2">
          <GraduationCap className="size-8 stroke-gray-200" />
          <h1 className="text-[clamp(0.8rem,1.1rem,2rem)] font-medium text-gray-200">
            Universitas Mercu Buana Yogyakarta
          </h1>
        </div>
        <div className="glass-bg p-3">
          <div>
            <Avatar
              user={user}
              className="size-20 rounded-full bg-blue-900 text-2xl"
            />
          </div>
          <div>
            <h1 className="pt-2 text-lg font-medium text-gray-200">
              {user?.name || "User"}
            </h1>
            <p className="text-sm text-gray-400">{user?.email || "Email"}</p>
            <p className="text-sm text-gray-400">
              {data?.profile?.role || "Role"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
