import { AnnoucementList } from "@components/Login/AnnouncementList";
import { Megaphone } from "lucide-react";

export const AnnouncementSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 px-4">
        <h1 className="flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-3 text-center text-xl text-white">
          <Megaphone />
          Pengumuman
        </h1>
        <AnnoucementList />
      </div>
    </div>
  );
};
