export const MainBg = () => {
  return (
    <div
      className="absolute inset-0 z-1 h-screen translate-z-0 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/fathur-md/sso-demo/main/src/assets/login-bg.png")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-transparent to-blue-900"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-blue-900 via-transparent to-blue-900"></div>

      {/* Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200 Q600 400 1200 200 T2400 200"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 400 Q600 600 1200 400 T2400 400"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
