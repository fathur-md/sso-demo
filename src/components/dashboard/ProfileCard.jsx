import { Avatar } from "@components/dashboard/Avatar";
import { MainLogo } from "@components/MainLogo";
import { GraduationCap } from "lucide-react";

export const ProfileCard = ({ user, data }) => {
  return (
    <div className="px-2 hidden">
      <div className="max-w-sm overflow-hidden rounded-lg border border-gray-600/30">
        <div className="flex items-center justify-center gap-2 bg-blue-900 px-3 py-2">
          <GraduationCap className="size-8 stroke-gray-200" />
          <h1 className="text-[clamp(0.8rem,1.1rem,2rem)] font-medium text-gray-200">
            Universitas Mercu Buana Yogyakarta
          </h1>
        </div>
        <div className="bg-white/60 p-3 backdrop-blur-sm">
          <div>
            <Avatar
              user={user}
              className="size-20 rounded-full bg-blue-900 text-2xl"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
