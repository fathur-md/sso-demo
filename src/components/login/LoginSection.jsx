import { LoginForm } from "@components/login/LoginForm";
import { MainLogo } from "@components/MainLogo";
import { loginData } from "@utils/mockupData";
import { InfoIcon } from "lucide-react";

export const LoginSection = () => {
  return (
    <div className="flex items-center">
      <div className="max-w-sm p-2 lg:px-6">
        <div>
          <MainLogo color="white" />
          <h1 className="py-6 pb-8 text-center text-3xl font-semibold tracking-tight text-gray-200">
            {loginData.title}
          </h1>
          <div className="mx-auto flex max-w-sm items-center gap-3 rounded-sm border-l-6 border-gray-400 bg-gray-200 p-3 shadow-[0_0_3px] shadow-black/10">
            <InfoIcon className="size-10 text-blue-900" />
            <p className="text-left text-sm leading-tight font-medium text-blue-900">
              {loginData.description}
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
            Civitas akademika wajib menjaga kerahasiaan username dan password
            masing - masing saat menggunakan SSO
          </p>
        </div>
      </div>
    </div>
  );
};

// <div className="flex h-full min-h-screen w-full items-center justify-center p-6 md:bg-white/75 md:backdrop-blur-xl">
//   <div className="max-sm:px-6">
//     <div>
//       <MainLogo color="white" />
//       <h1 className="py-8 pb-10 text-center text-2xl font-semibold tracking-tight text-gray-200 md:text-3xl">
//         {loginData.title}
//       </h1>
//       <div className="mx-auto flex max-w-sm items-center gap-3 rounded-sm border-l-6 border-blue-900 bg-gray-50 p-3 shadow-[0_0_3px] shadow-black/10">
//         <InfoIcon className="size-10 text-blue-900" />
//         <p className="text-left text-sm leading-tight font-medium text-blue-900">
//           {loginData.description}
//         </p>
//       </div>
//     </div>
//     <LoginForm />
//     <div className="pt-8">
//       <a href="https://wa.me/6287814043252" target="_blank">
//         <h1 className="text-center text-xl font-bold tracking-tight text-blue-900">
//           Hotline : 0878-1404-3252
//         </h1>
//       </a>
//       <p className="mx-auto max-w-xs pt-3 text-center text-sm text-gray-800">
//         Civitas akademika wajib menjaga kerahasiaan username dan password
//         masing - masing saat menggunakan SSO
//       </p>
//     </div>
//   </div>
// </div>
