import { ReadmeDefault } from "@components/login/Readme";
import { ExternalLink, Info } from "lucide-react";
import { motion } from "motion/react";

export const NewsCard = ({ card, setSelected }) => {
  const hasImage = !!card.img;
  const isReadme = card.title === "README";

  if (isReadme) return <ReadmeDefault setSelected={setSelected} card={card} />;

  return (
    <div
      onClick={() => setSelected(card.title)}
      className="flex cursor-pointer"
    >
      <motion.div
        layoutId={`card-container-${card.title}`}
        className="relative w-full overflow-hidden rounded-2xl text-white"
      >
        {hasImage && (
          <motion.div layoutId={`card-image-${card.title}`}>
            <img
              src={card.img}
              alt={card.title}
              className="w-full rounded-2xl object-cover"
            />
          </motion.div>
        )}

        {/* TITLE */}
        <motion.div
          className={`${hasImage ? "absolute top-0 bg-white/50" : "bg-white/70"} w-full p-4 text-zinc-800 backdrop-blur-sm`}
        >
          <motion.div layoutId={`card-title-date-${card.title}`}>
            <span className="text-xs font-medium">
              {formatDate(card.published, true, true)}
            </span>
            <h3 className="text-lg font-semibold">{card.title}</h3>
          </motion.div>
          {!hasImage && (
            <div className="w-full pt-2">
              <p className="line-clamp-1 text-sm">{card.content}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
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
