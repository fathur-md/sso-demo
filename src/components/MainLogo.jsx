export const MainLogo = ({ color = "default", data, className = "" }) => {
  const logoSrc =
    color === "white"
      ? data.logo
      : "https://sso.mercubuana-yogya.ac.id/build/assets/images/logo.png";

  return (
    <div className={className}>
      <img src={logoSrc} alt="logo" className="h-full w-full object-contain" />
    </div>
  );
};
