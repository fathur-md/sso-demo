import { Transition, TransitionChild } from "@headlessui/react";
import { Megaphone } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

export const NewsSection = ({ data }) => {
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

  useEffect(() => {
    if (newsOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [newsOpen]);

  return (
    <div className="mx-auto flex h-full w-full max-w-2xl flex-col gap-4 max-lg:pt-12">
      <div className="flex w-fit items-center gap-2 rounded-lg bg-white/75 px-3 py-2 pr-6">
        <Megaphone className="size-5" />
        <h1 className="text-lg font-semibold">Pengumuman</h1>
      </div>
      <div className="flex-1 overflow-hidden lg:h-[540px]">
        <div className="h-full w-full space-y-4 rounded-lg lg:overflow-y-auto">
          {data?.newsSection.map((data, index) => (
            <div
              key={index}
              className="w-full space-y-3 rounded-lg bg-white/75 p-4 shadow-md"
            >
              <h2 className="md:text-md text-sm font-semibold text-zinc-900">
                {data?.title}
              </h2>
              {data?.img && (
                <img
                  src={data?.img}
                  alt={data?.title}
                  className="w-full rounded-lg object-cover"
                />
              )}

              <p className="w-full max-w-lg truncate text-sm text-zinc-900">
                {data?.content}
              </p>

              <div className="flex items-center justify-between border-t border-gray-400 pt-3 text-xs text-gray-600">
                <span>{formatDate(data?.published, { month: "short" })}</span>
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
              className="fixed inset-0 z-60 bg-blue-900 backdrop-blur-sm"
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
            <div className="relative z-100 flex w-full max-w-5xl flex-col rounded-lg bg-white p-6 shadow-lg">
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
                    {selectedNews?.title}
                  </h1>
                  <p className="py-2 text-xs">
                    {formatDate(selectedNews?.published, { month: "long" })} •{" "}
                    <span>Published {timeAgo(selectedNews?.published)}</span>
                  </p>
                  {selectedNews.img ? (
                    <img
                      src={selectedNews?.img}
                      alt={selectedNews?.title}
                      className="mt-4 w-full max-w-lg rounded-lg object-cover"
                    />
                  ) : (
                    <p className="text-sm">{selectedNews?.content}</p>
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

function formatDate(dateString, options = "short") {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-ID", {
    day: "numeric",
    month: options.month,
    year: "numeric",
  });
}

function timeAgo(dateString) {
  // Parse "YYYY-M-D" format reliably
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day); // month is 0-based
  const now = new Date();

  // If the date is invalid, fallback
  if (isNaN(date)) return "Invalid date";

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 0) return "Just now"; // future dates

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (let interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return count === 1
        ? `1 ${interval.label} ago`
        : `${count} ${interval.label}s ago`;
    }
  }

  return "Just now";
}
