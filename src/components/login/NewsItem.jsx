import { ReadmeOpen } from "@components/login/Readme";
import { motion, MotionConfig } from "motion/react";
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

  if (isReadme)
    return (
      <MotionConfig transition={{ type: "spring", duration: 0.5 }}>
        <ReadmeOpen onClose={onClose} />
      </MotionConfig>
    );

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-100 items-center justify-center overflow-hidden bg-black/80"
        onClick={onClose}
      />

      <div
        onClick={onClose}
        className="fixed inset-0 z-110 grid overflow-y-auto p-4"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          layoutId={`card-container-${selected}`}
          className={`glass-bg relative mx-auto my-auto w-full max-w-4xl overflow-hidden rounded-2xl backdrop-blur-sm md:flex ${img ? "" : "md:max-w-xl"}`}
        >
          {/* BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 rounded-xl bg-red-400 px-6 py-2 text-white"
          >
            Tutup
          </button>

          {/* TITLE */}
          <motion.div className={`p-4 md:w-1/2 ${img ? "" : "md:w-full"}`}>
            <span className="text-sm">
              {formatDate(published, true, true)} &middot; {timeAgo(published)}
            </span>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="pt-4">
              <h1>{content}</h1>
            </div>
          </motion.div>

          {/* IMAGE */}
          {img && (
            <motion.div
              layoutId={`card-image-${selected}`}
              className="md:block md:w-1/2"
            >
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}
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
