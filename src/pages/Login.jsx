import { AnnouncementSection } from "@components/Login/AnnouncementSection";
import { FormSection } from "@components/Login/FormSection";

const data = {
  logo: "https://sso.mercubuana-yogya.ac.id/build/assets/images/logo.png",
  logoWhite: "https://mercubuana-yogya.ac.id/assets/img/logo-white-bg.png",
  logoNoText:
    "https://skalastreskerja.mercu.id/wp-content/uploads/2020/10/logonoback.png",
  img: "https://fti.mercubuana-yogya.ac.id/storage/whatsapp-image-2025-02-27-at-141701.jpeg",
  alt: "gedung mercubuana yogya",
};

export const Login = () => {
  return (
    <div className="flex min-h-dvh">
      <div className="mx-auto flex w-full max-w-7xl items-center lg:px-10">
        <div className="flex w-full flex-col lg:flex-row-reverse">
          <div className="flex w-full items-center max-lg:min-h-dvh lg:max-w-xl">
            <FormSection data={data} />
          </div>
          <div className="relative mx-auto w-full max-lg:min-h-dvh max-lg:max-w-lg max-lg:py-4">
            <AnnouncementSection />
          </div>
        </div>
      </div>
    </div>
  );
};

// export const Logindss = () => {
//   return (
//     <div className="flex min-h-dvh">
//       <div className="">
//         {/* Annoucement Section */}
//         <div>
//           <AnnouncementSection />
//         </div>
//         {/* Form Section */}
//         <div>
//           <FormSection data={data} />
//         </div>

//         {/* <div className="order-1 mx-auto hidden h-fit w-full bg-gray-50 pb-6 sm:max-w-lg sm:rounded-md lg:order-none">
//           <div className="pointer-events-none space-y-4 pt-12 pb-5 select-none">
//             <img
//               src={data.logo}
//               alt="logo"
//               className="mx-auto h-32 w-auto object-contain"
//             />
//             <div className="pb-4 text-center">
//               <h1 className="py-2 text-4xl font-medium text-gray-900">
//                 Single Sign-On
//               </h1>
//               <p className="text-base font-semibold text-gray-500">
//                 Universitas Mercu Buana Yogyakarta
//               </p>
//             </div>
//             <p className="mx-auto flex max-w-xs items-center gap-3 rounded-xs border-l-6 border-blue-800 bg-gray-200 p-3 text-sm leading-tight font-medium text-blue-900 shadow-sm">
//               <span>
//                 <InfoIcon className="inline-block size-5 text-blue-900" />
//               </span>
//               Untuk mahasiswa gunakan NIM dan password yang sama seperti di SIA
//             </p>
//           </div>
//           <Form />
//           <div className="mt-8">
//             <a href="https://wa.me/6287814043252" target="_blank">
//               <h1 className="text-center text-xl font-bold tracking-tight text-blue-900">
//                 Hotline : 0878-1404-3252
//               </h1>
//             </a>
//             <p className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-400">
//               Civitas akademika wajib menjaga kerahasiaan username dan password
//               masing - masing saat menggunakan SSO
//             </p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };
