import { MainLogo } from "@components/MainLogo";
import { LoginForm } from "@pages/login/LoginFormOLD";
import { InfoIcon } from "lucide-react";

export const FormSection = () => {
  return (
    <div className="w-fit p-8">
      <div className="flex flex-col items-center gap-4">
        <MainLogo />
        <h1 className="py-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-white">
          Portal Single Sign-On
        </h1>
        <div className="flex max-w-sm items-center gap-3 rounded-sm border-l-6 border-blue-900 p-3 text-left text-sm leading-tight font-medium shadow-[0_0_3px] shadow-black/10">
          <InfoIcon className="size-12 text-blue-900" />
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Mahasiswa: gunakan NIM/NIS dan kata sandi yang sama dengan SIA.
          </p>
        </div>
      </div>
      <LoginForm />
      <div className="mt-8">
        <a href="https://wa.me/6287814043252" target="_blank">
          <h1 className="text-center text-xl font-bold tracking-tight text-blue-900">
            Hotline : 0878-1404-3252
          </h1>
        </a>
        <p className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-400">
          Civitas akademika wajib menjaga kerahasiaan username dan password
          masing - masing saat menggunakan SSO
        </p>
      </div>
    </div>
  );
};
