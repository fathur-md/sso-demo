import { LoginForm } from "@components/login/LoginForm";
import { MainLogo } from "@components/MainLogo";
import { InfoIcon } from "lucide-react";

const mockupData = {
  title: "Portal Single Sign-On",
  description:
    "Mahasiswa: gunakan NIM/NIS dan kata sandi yang sama dengan SIA.",
  hotline: "0878-1404-3252",
  hotlineLink: "https://wa.me/6287814043252",
  hotlineText: "Hotline : 0878-1404-3252",
};

export const LoginSection = () => {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center p-6 md:bg-white/75 md:backdrop-blur-xl">
      <div className="max-sm:px-6">
        <div>
          <MainLogo />
          <h1 className="py-8 pb-10 text-center text-2xl font-semibold tracking-tight md:text-3xl">
            {mockupData.title}
          </h1>
          <div className="mx-auto flex max-w-sm items-center gap-3 rounded-sm border-l-6 border-blue-900 bg-gray-50 p-3 shadow-[0_0_3px] shadow-black/10">
            <InfoIcon className="size-10 text-blue-900" />
            <p className="text-left text-sm leading-tight font-medium text-blue-900">
              {mockupData.description}
            </p>
          </div>
        </div>
        <LoginForm />
        <div className="pt-8">
          <a href="https://wa.me/6287814043252" target="_blank">
            <h1 className="text-center text-xl font-bold tracking-tight text-blue-900">
              Hotline : 0878-1404-3252
            </h1>
          </a>
          <p className="mx-auto max-w-xs pt-3 text-center text-sm text-gray-800">
            Civitas akademika wajib menjaga kerahasiaan username dan password
            masing - masing saat menggunakan SSO
          </p>
        </div>
      </div>
    </div>
  );
};
