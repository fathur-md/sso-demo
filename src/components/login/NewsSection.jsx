import { Transition, TransitionChild } from "@headlessui/react";
import { Megaphone } from "lucide-react";
import { Fragment, useState } from "react";

export const NewsSection = ({ data, isLoading, error }) => {
  const [newsOpen, setNewsOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (news) => {
    setSelectedNews(news);
    setNewsOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setNewsOpen(false);
  };

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
                <span>Diterbitkan pada: {formatDate(data.published)}</span>
                {index > 0 && (
                  <button
                    onClick={() => openModal(data)}
                    className="font-semibold"
                  >
                    Lihat Selengkapnya
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL */}
      <Transition show={newsOpen} as={Fragment}>
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4">
          <TransitionChild
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-blue-900 backdrop-blur-sm"
              onClick={closeModal}
            />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition-transform duration-300 ease-out"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition-transform duration-200 ease-in"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <div className="relative z-10 flex w-full max-w-5xl flex-col rounded-lg bg-white p-6 shadow-lg">
              <div className="flex w-full items-center justify-between overflow-y-auto rounded-lg bg-blue-900 p-2 pl-3">
                <div className="flex items-center gap-2">
                  <Megaphone className="size-5 text-white" />
                  <h1 className="text-base font-semibold text-white">
                    Pengumuman
                  </h1>
                </div>
                <button
                  className="w-fit rounded-md bg-gray-50 px-4 py-2 text-sm"
                  onClick={closeModal}
                >
                  Tutup
                </button>
              </div>
              {selectedNews && (
                <div>
                  <h1 className="pt-4 text-lg font-semibold tracking-tight">
                    {selectedNews.title}
                  </h1>
                  {/* <p>{formatDate("2025-8-20")}</p> */}
                  {selectedNews.img ? (
                    <img
                      src={selectedNews.img}
                      alt={selectedNews.title}
                      className="mt-4 w-full rounded-lg object-cover"
                    />
                  ) : (
                    <p>{selectedNews.content}</p>
                  )}
                </div>
              )}
            </div>
          </TransitionChild>
        </div>
      </Transition>
    </div>
  );
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
