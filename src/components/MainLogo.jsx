export const MainLogo = ({ color = "default", className = "" }) => {
  const logoSrc =
    color === "white"
      ? "https://dpm.mercubuana-yogya.ac.id/wp-content/uploads/2023/04/logo-umby-white.png"
      : "https://sso.mercubuana-yogya.ac.id/build/assets/images/logo.png";

  return (
    <div className={className}>
      <img src={logoSrc} alt="logo" className="h-full w-full object-contain" />
    </div>
  );
};
