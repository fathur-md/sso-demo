import { motion } from "motion/react";

export const NewsList = ({ selected, onSelect, data }) => {
  if (!data?.length) return <p className="p-4">No news available.</p>;

  return (
    <div className="grid grid-cols-1 gap-6 p-4 xl:grid-cols-2">
      {data?.map((card) => (
        <Card
          key={card.title}
          {...card}
          isSelected={card.title === selected}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

const Card = ({ title, content, img, published, onSelect }) => {
  const readme = title === "README";

  return (
    <div onClick={() => onSelect(title)} className="cursor-pointer">
      <motion.div
        className="glass-bg relative h-[480px] w-full overflow-hidden rounded-2xl"
        layoutId={`card-container-${title}`}
      >
        {/* Image */}
        <motion.div
          className="absolute top-0 left-0 h-[240px] w-full overflow-hidden"
          layoutId={`card-image-container-${title}`}
        >
          {img && (
            <img src={img} alt="" className="h-full w-full object-cover" />
          )}
        </motion.div>

        {/* Title + Date */}
        <motion.div
          className="absolute top-4 left-4 max-w-[250px]"
          layoutId={`title-container-${title}`}
        >
          <span className="text-xs opacity-75">
            {formatDate(published, { month: "long" })}
          </span>
          <h2 className="text-lg font-semibold">{title}</h2>
        </motion.div>

        {/* Preview Content */}
        <div className="absolute right-4 bottom-4 left-4 line-clamp-2 text-sm text-neutral-600">
          {readme ? (
            <p>
              Ini adalah demo sistem. Segala konten, logo, dan material yang
              ditampilkan di sini adalah milik Universitas Mercu Buana
              Yogyakarta.
            </p>
          ) : (
            <p className="line-clamp-2">{content}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  // Day name
  const weekday = date
    .toLocaleDateString("en-US", { weekday: "long" })
    .toUpperCase();

  // Month name
  const monthName = date
    .toLocaleDateString("en-US", { month: "long" })
    .toUpperCase();

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

  return `${weekday}, ${monthName} ${dayNumber}${suffix}`;
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

// <div className="pointer-events-none relative h-full w-full">
//       <motion.div
//         className="pointer-events-auto relative mx-auto h-full w-full overflow-hidden rounded-2xl bg-neutral-900"
//         layoutId={`card-container-${title}`}
//       >
//         <motion.div
//           className="absolute top-0 left-0 h-[420px] w-screen overflow-hidden"
//           layoutId={`card-image-container-${title}`}
//         >
//           {img && (
//             <img src={img} alt="" className="h-full w-full object-cover" />
//           )}
//         </motion.div>
//         <motion.div
//           className="absolute top-4 left-4 max-w-[300px]"
//           layoutId={`title-container-${title}`}
//         >
//           <span>{formatDate(published, { month: "long" })}</span>
//           <h2 className="text-xl font-semibold">{title}</h2>
//         </motion.div>
//         <motion.div>
//           {readme ? (
//             <p>
//               Ini adalah demo sistem. Segala konten, logo, dan material yang
//               ditampilkan di sini adalah milik Universitas Mercu Buana
//               Yogyakarta.
//             </p>
//           ) : (
//             <p>{content}</p>
//           )}
//         </motion.div>
//       </motion.div>
//     </div>
