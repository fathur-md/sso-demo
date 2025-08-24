import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Test = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-slate-600">
      <div className="p-4">
        <div className="flex rounded-lg bg-blue-900 p-4 text-white">
          <button className="w-full" onClick={() => setOpen((prev) => !prev)}>
            Clickme
          </button>
        </div>
      </div>

      {/* Small card */}
      <div className="p-10">
        <motion.div
          layoutId="card"
          className="glass-bg cursor-pointer rounded-lg p-4"
          onClick={() => setOpen(true)}
        >
          <h1>My Card</h1>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="card"
            className="glass-bg fixed inset-0 h-full w-full p-10"
            onClick={() => setOpen(false)}
          >
            <h1 className="text-2xl">Card</h1>
          </motion.div>
          // <motion.div
          //   className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   exit={{ opacity: 0 }}
          //   onClick={() => setOpen(false)}
          // >
          //   {/* This part zooms */}
          //   <motion.div
          //     layoutId="card"
          //     className="w-full max-w-md rounded-lg bg-white"
          //     onClick={(e) => e.stopPropagation()}
          //   >
          //     {/* Inner content just fades, no scaling */}
          //     <motion.div
          //       initial={{ opacity: 0 }}
          //       animate={{ opacity: 1 }}
          //       exit={{ opacity: 0 }}
          //       transition={{ duration: 0.2 }}
          //       className="p-6"
          //     >
          //       <h1 className="text-2xl font-bold">My Card expanded</h1>
          //       <button
          //         className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
          //         onClick={() => setOpen(false)}
          //       >
          //         Close
          //       </button>
          //     </motion.div>
          //   </motion.div>
          // </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
