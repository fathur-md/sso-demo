import { Megaphone } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import ReactMarkdown from "react-markdown";
import readmeContent from "../../../README.md?raw";
import { useEffect } from "react";

export const NewsItem = ({ data, selected, onClose }) => {
  const { title, content, img, published } =
    data?.find((item) => item.title === selected) || {};

  useEffect(() => {
    // kunci scroll ketika NewsItem terbuka
    document.body.style.overflow = "hidden";

    return () => {
      // balikin scroll ketika ditutup
      document.body.style.overflow = "";
    };
  }, []);

  const isReadme = title === "README";
  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="fixed inset-0 z-100 items-center justify-center overflow-hidden bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Card Container */}
      <div className="fixed inset-x-3 inset-y-4 z-110 flex justify-center overflow-y-scroll text-white">
        <motion.div
          layoutId={`card-container-${selected}`}
          className="relative mx-auto w-full max-w-5xl rounded-2xl"
        >
          {/* CARD HEADER */}
          <motion.div
            layoutId="card-header-bg"
            className="rounded-lg bg-white/80 p-3 backdrop-blur-lg"
          >
            <div className="flex items-center justify-between text-blue-950">
              <motion.div
                layout="position"
                className="flex items-center gap-2 text-blue-950"
              >
                <Megaphone className="size-6 lg:size-8" />
                <h1 className="text-lg font-semibold lg:text-xl">Pengumuman</h1>
              </motion.div>
              <button
                onClick={onClose}
                className="rounded-lg bg-red-400 px-6 py-1.5 text-sm font-medium text-gray-100"
              >
                Tutup
              </button>
            </div>
          </motion.div>

          <div className="md:flex md:pt-12">
            <div>
              {/* CARD TITLE */}
              <motion.div
                layoutId={`card-title-date-${selected}`}
                className="p-4"
              >
                <span className="flex items-center pt-2 text-sm font-medium text-gray-400">
                  {formatDate(published, true, true)} •{" "}
                  <span className="pl-1 text-xs">
                    Published {timeAgo(published)}
                  </span>
                </span>
                <h3 className="pt-2 text-2xl font-semibold text-gray-300">
                  {title}
                </h3>
              </motion.div>

              {/* CARD CONTENT */}
              <motion.div className="flex-1 p-4">
                {isReadme ? (
                  <>
                    <motion.div layoutId="readme-content">
                      <p className="text-lg font-semibold">Login Info</p>
                      <ul className="list-disc py-4 pl-5 text-base font-semibold">
                        <li>
                          NIM/NIS: <code>123</code>
                        </li>
                        <li>
                          Password: <code>123</code>
                        </li>
                      </ul>
                    </motion.div>
                    <div className="prose prose-invert pb-30 text-white">
                      <ReactMarkdown>{readmeContent}</ReactMarkdown>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-white">{content}</p>
                )}
              </motion.div>
            </div>

            <div>
              {/* CARD IMAGE */}
              <motion.div layoutId={`card-image-${selected}`}>
                {img && (
                  <img
                    src={img}
                    alt={title}
                    className="w-full rounded-2xl object-cover"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

function formatDate(dateString, uppercase = false, th = false) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  // Day name
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

  const weekdayUppercase = weekday.toUpperCase();
  // Month name
  const monthName = date.toLocaleDateString("en-US", { month: "long" });

  const monthUppercase = monthName.toUpperCase();

  // Day with suffix
  const dayNumber = date.getDate();
  const suffix =
    dayNumber % 10 === 1 && dayNumber !== 11
      ? "ST"
      : dayNumber % 10 === 2 && dayNumber !== 12
        ? "ND"
        : dayNumber % 10 === 3 && dayNumber !== 13
          ? "RD"
          : "TH";

  if (uppercase) {
    return `${weekdayUppercase}, ${monthUppercase} ${dayNumber}${th ? suffix : ""}`;
  }

  return `${weekday}, ${monthName} ${dayNumber}${th ? suffix : ""}`;
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
