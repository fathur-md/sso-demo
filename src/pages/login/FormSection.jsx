import { MainLogo } from "@components/MainLogo";
import { LoginForm } from "@pages/login/LoginForm";
import { InfoIcon } from "lucide-react";

export const FormSection = () => {
  return (
    <div className="flex w-full items-center p-6 select-none">
      <div className="w-full rounded-lg bg-gradient-to-b from-gray-50 via-gray-50/90 via-50% to-white/80 to-100% p-4 py-8 backdrop-blur-sm">
        <div>
          <MainLogo />
          <h1 className="py-4 text-center text-2xl font-semibold tracking-tight text-zinc-800 md:text-3xl">
            Portal Single Sign-On
          </h1>
          <div className="mx-auto flex max-w-sm items-center gap-3 rounded-sm border-l-6 border-blue-900 bg-blue-100/50 p-3 shadow-[0_0_3px] shadow-black/10">
            <InfoIcon className="size-10 text-blue-900" />
            <p className="text-left text-sm leading-tight font-medium text-blue-900">
              Mahasiswa: gunakan NIM/NIS dan kata sandi yang sama dengan SIA.
            </p>
          </div>
        </div>
        {/* LOGIN FORM */}
        <LoginForm />
        <div className="mt-8">
          <a href="https://wa.me/6287814043252" target="_blank">
            <h1 className="text-center text-xl font-bold tracking-tight text-blue-900">
              Hotline : 0878-1404-3252
            </h1>
          </a>
          <p className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-800">
            Civitas akademika wajib menjaga kerahasiaan username dan password
            masing - masing saat menggunakan SSO
          </p>
        </div>
      </div>
    </div>
  );
};
