import { loginData } from "@utils/mockupData";

export const MainLogo = ({ color = "default" }) => {
  const logoSrc =
    color === "white"
      ? loginData.logo
      : "https://sso.mercubuana-yogya.ac.id/build/assets/images/logo.png";

  return (
    <img
      src={logoSrc}
      alt="logo"
      className="mx-auto h-30 w-auto object-contain"
    />
  );
};
