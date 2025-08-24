import { Megaphone } from "lucide-react";
import { motion } from "motion/react";

export const NewsHeader = () => {
  return (
    <div className="sticky top-0 z-20 bg-blue-900 p-4 lg:py-8">
      <motion.div
        layoutId="card-header-bg"
        className="rounded-lg bg-white/75 p-3 backdrop-blur-lg"
      >
        <motion.div
          layout="position"
          className="flex items-center gap-2 text-blue-950"
        >
          <Megaphone className="size-6 lg:size-8" />
          <h1 className="text-lg font-semibold lg:text-xl">Pengumuman</h1>
        </motion.div>
      </motion.div>
    </div>
  );
};
