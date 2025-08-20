import LoginBg from "@assets/login-bg.png";

export const MainBg = () => {
  return (
    <div
      className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-white/20 to-white/10"></div>
    </div>
  );
};
