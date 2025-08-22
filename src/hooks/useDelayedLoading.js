import { useEffect, useState } from "react";

export const useDelayedLoading = ({ loading, delay = 1000 }) => {
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setDelayedLoading(false);
      }, delay); // Simulate loading delay
      return () => clearTimeout(timer);
    }
  }, [loading, delay]);

  return delayedLoading;
};
