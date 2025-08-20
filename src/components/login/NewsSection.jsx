import { pengumuman } from "@utils/mockupData";
import { Megaphone } from "lucide-react";

export const NewsSection = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4 max-lg:pt-12">
      <div className="flex w-fit items-center gap-2 rounded-lg bg-white/75 px-3 py-2 pr-6">
        <Megaphone className="size-5" />
        <h1 className="text-lg font-semibold">Pengumuman</h1>
      </div>
      <div className="flex-1 overflow-hidden lg:h-[540px]">
        {/* TODO: Add function for "Lihat selengkapnya" later */}
        <div className="h-full w-full space-y-4 rounded-lg lg:overflow-y-auto">
          {pengumuman.map((data, index) => (
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

//  <div className="relative space-y-4 p-4 md:h-screen md:overflow-hidden md:pr-2">
//       <div className="absolute inset-x-0 top-0 flex items-center gap-3 px-4 py-3 md:bg-blue-900/80 md:text-gray-50 md:backdrop-blur-xl">
//         <Megaphone className="size-6" />
//         <h1 className="text-lg font-semibold">Pengumuman</h1>
//       </div>
//       <div className="grid h-full grid-cols-1 gap-4 rounded-lg pt-14 md:overflow-y-scroll md:pr-4">
//         {pengumuman.map((data, index) => (
//           <div
//             key={index}
//             className="space-y-4 rounded-lg bg-white/75 p-4 text-sm shadow-gray-300/50 max-md:shadow-[0_0_10px]"
//           >
//             <h1 className="font-semibold text-zinc-900">{data.title}</h1>
//             {data.img && (
//               <img
//                 src={data.img}
//                 alt={data.title}
//                 className="w-full rounded-lg object-cover"
//               />
//             )}
//             <p className={`pr-4 ${index === 0 ? "" : "truncate"}`}>
//               {data.content}
//             </p>
//             <div className="flex items-center justify-between text-xs text-gray-500">
//               <span>Diterbitkan pada: {data.published}</span>
//               {index > 0 && <button>Lihat Selengkapnya</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
