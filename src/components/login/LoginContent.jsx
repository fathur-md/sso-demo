import { LoginForm } from "@components/login/LoginForm";
import { MainLogo } from "@components/MainLogo";
import { InfoIcon } from "lucide-react";

export const LoginContent = ({ data }) => {
  return (
    <div className="relative z-10 order-1 bg-blue-900 lg:order-2">
      <div className="flex min-h-screen items-center overflow-scroll overflow-y-scroll lg:sticky! lg:top-0!">
        <div className="flex h-full w-full items-center justify-center p-4">
          <div className="w-full max-w-sm p-4 pb-20 lg:px-6 lg:pb-0">
            <div>
              {data?.loginSection && (
                <MainLogo
                  color="white"
                  data={data.loginSection}
                  className="h-30"
                />
              )}
              <h1 className="py-6 pb-8 text-center text-3xl font-semibold tracking-tight text-gray-200">
                {data?.loginSection.title}
              </h1>
              <div className="mx-auto flex max-w-sm items-center gap-3 rounded-sm border-l-6 border-gray-400 bg-gray-200 p-3 shadow-[0_0_3px] shadow-black/10">
                <InfoIcon className="size-10 text-blue-900" />
                <p className="text-left text-sm leading-tight font-medium text-blue-900">
                  {data?.loginSection.description}
                </p>
              </div>
            </div>
            <LoginForm />
            <div className="pt-8">
              <a href="https://wa.me/6287814043252" target="_blank">
                <h1 className="text-center text-xl font-bold tracking-tight text-gray-100">
                  Hotline : 0878-1404-3252
                </h1>
              </a>
              <p className="mx-auto max-w-xs pt-3 text-center text-sm text-gray-200">
                Civitas akademika wajib menjaga kerahasiaan username dan
                password masing - masing saat menggunakan SSO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
