import { useEffect } from "react";

export const Redirecting = () => {
  useEffect(() => {
    const redirectUrl =
      new URLSearchParams(window.location.search).get("redirect") ||
      "http://localhost:5173";

    setTimeout(() => {
      window.location.href = `${redirectUrl}?token=fake-jwt-token`;
    }, 1500);
  }, []);

  return (
    <div className="min-h-dvh flex items-center justify-center bg-white">
      <p className="text-lg text-gray-700 animate-pulse">
        Redirecting to your app...
      </p>
    </div>
  );
};
