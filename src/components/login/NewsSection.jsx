import { Megaphone } from "lucide-react";

export const NewsSection = ({ data, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col gap-4 max-lg:pt-12">
      <div className="flex w-fit items-center gap-2 rounded-lg bg-white/75 px-3 py-2 pr-6">
        <Megaphone className="size-5" />
        <h1 className="text-lg font-semibold">Pengumuman</h1>
      </div>
      <div className="flex-1 overflow-hidden lg:h-[540px]">
        {/* TODO: Add function for "Lihat selengkapnya" later */}
        <div className="h-full w-full space-y-4 rounded-lg lg:overflow-y-auto">
          {data.newsSection.map((data, index) => (
            <div
              key={index}
              className="space-y-3 rounded-lg bg-white/75 p-4 shadow-md"
            >
              <h2 className="md:text-md text-sm font-semibold text-zinc-900">
                {data.title}
              </h2>
              {data.img && (
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full rounded-lg object-cover"
                />
              )}
              <p className="text-sm text-zinc-900">{data.content}</p>
              <div className="flex items-center justify-between border-t border-gray-400 pt-3 text-xs text-gray-600">
                <span>Diterbitkan pada: {data.published}</span>
                {index > 0 && (
                  <button className="font-semibold">Lihat Selengkapnya</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
