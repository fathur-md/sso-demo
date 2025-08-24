import { Megaphone } from "lucide-react";

export const NewsHeader = () => {
  return (
    <div className="sticky top-0 p-4">
      <div className="glass-bg rounded-lg p-4">
        <div className="flex items-center gap-2 text-gray-800">
          <Megaphone className="size-6 lg:size-8" />
          <h1 className="text-xl font-semibold lg:text-2xl">Pengumuman</h1>
        </div>
      </div>
    </div>
  );
};
