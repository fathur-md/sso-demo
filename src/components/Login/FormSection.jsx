import { Form } from "@components/Login/Form";
import { InfoIcon } from "lucide-react";

export const FormSection = ({ data }) => {
  return (
    <div className="mx-auto w-full max-w-xl space-y-5 rounded-lg py-8 shadow-gray-400/20 select-none sm:shadow-[0_0_20px]">
      <div className="pointer-events-none space-y-4 select-none">
        <div className="pb-4 text-center">
          <img
            src={data.logo}
            alt="logo"
            className="mx-auto h-30 w-auto object-contain"
          />
          <h1 className="pt-6 text-4xl font-medium text-gray-900">
            Single Sign-On
          </h1>
          {/* <p className="text-xl font-normal text-gray-500">
            Universitas Mercu Buana Yogyakarta
          </p> */}
        </div>
        <div className="">
          <p className="mx-auto flex max-w-xs items-center gap-3 rounded-sm border-l-6 border-blue-800 bg-gray-100 p-3 text-sm leading-tight font-medium text-blue-900 shadow-sm">
            <span>
              <InfoIcon className="inline-block size-5 text-blue-900" />
            </span>
            Untuk mahasiswa gunakan NIM dan password yang sama seperti di SIA
          </p>
        </div>
      </div>
      <Form />
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
