export const MainLogo = ({ color = "default", className = "" }) => {
  const logoSrc =
    color === "white"
      ? "https://dpm.mercubuana-yogya.ac.id/wp-content/uploads/2023/04/logo-umby-white.png"
      : "https://sso.mercubuana-yogya.ac.id/build/assets/images/logo.png";

  return (
    <div className={className}>
      <img
        src="https://sso.mercubuana-yogya.ac.id/build/assets/images/logo.png"
        alt="logo"
        className="block h-full w-full object-contain dark:hidden"
      />
      <img
        src="https://dpm.mercubuana-yogya.ac.id/wp-content/uploads/2023/04/logo-umby-white.png"
        alt="logo"
        className="hidden h-full w-full object-contain dark:block"
      />
    </div>
  );
};
