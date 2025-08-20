import { LoginForm } from "@components/old/OLDLoginForm";
import { MainLogo } from "@components/MainLogo";
import { InfoIcon } from "lucide-react";

export const FormSection = () => {
  return (
    <div className="flex h-full w-full items-center bg-gradient-to-b from-white/75 via-gray-50/80 to-gray-50/80 backdrop-blur-lg">
      <div className="w-full">
        <div className="mx-auto max-w-sm text-center">
          <MainLogo />
          <h1 className="py-4 pb-6 text-2xl font-semibold tracking-tight md:text-3xl 2xl:py-12">
            Portal Single Sign-On
          </h1>
          <div className="flex items-center gap-3 rounded-sm border-l-6 border-blue-900 bg-blue-100/50 p-3 shadow-[0_0_3px] shadow-black/10">
            <InfoIcon className="size-10 text-blue-900" />
            <p className="text-left text-sm leading-tight font-medium text-blue-900">
              Mahasiswa: gunakan NIM/NIS dan kata sandi yang sama dengan SIA.
            </p>
          </div>
        </div>
        {/* LOGIN FORM */}
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
