import { AnimatePresence, motion } from "framer-motion";

export const ContentAnim = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
