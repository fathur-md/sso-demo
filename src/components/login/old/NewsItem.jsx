import { motion, MotionConfig } from "motion/react";

export const NewsItem = ({ id, data, onClose }) => {
  const { title, content, img } = data?.find((item) => item.title === id);
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
        className="fixed inset-0 z-20 bg-black/80"
        onClick={onClose}
      />

      {/* Card Content */}
      <div className="fixed inset-0 z-30 flex justify-center p-6 text-white">
        <motion.div
          className="m relative mx-auto w-full overflow-hidden rounded-2xl bg-blue-900"
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className="absolute top-6 left-6 z-20 pr-8 lg:max-w-1/2"
            layoutId={`title-container-${id}`}
          >
            <h2 className="text-2xl font-bold">{title}</h2>
            {!img && <p className="mt-4 text-sm">{content}</p>}
          </motion.div>
          <motion.div
            className="absolute top-0 right-0 z-10 w-full overflow-hidden lg:max-w-1/2"
            layoutId={`card-image-container-${id}`}
          >
            <img className="h-full w-full object-cover" src={img} alt="" />
          </motion.div>
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-700"
            onClick={onClose}
          >
            ✕
          </button>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

// <MotionConfig transition={{ type: "spring", stiffness: 200, damping: 30 }}>
//   {/* Overlay */}
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 0.25 }}
//     className="pointer-events-auto fixed inset-0 z-0 bg-black/80"
//     onClick={onClose}
//   />
// </MotionConfig>
