import loginBg from "@assets/login-bg.png";

export const BackgroundImg = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={loginBg}
        alt="Background"
        className="mask-to-transparent h-full w-full object-cover object-center"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white-900 to-transparent" /> */}
    </div>
  );
};
