import { Form } from "@components/Login/Form";
import { MainLogo } from "@components/MainLogo";
import { Calendar, InfoIcon, Megaphone } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="flex h-full w-full items-center rounded-lg bg-gray-50 max-lg:min-h-[calc(100dvh-32px)] lg:max-w-md lg:shadow-[0_0_20px] lg:shadow-gray-400/20">
      <div className="w-full">
        <div className="space-y-4 py-3 text-center lg:p-4">
          <div className="mx-auto h-32 w-auto">
            <MainLogo />
          </div>
          <h1 className="py-4 text-4xl font-medium text-gray-900">
            Single Sign-On
          </h1>
          <p className="mx-auto flex max-w-xs items-center gap-3 rounded-sm border-l-6 border-blue-800 bg-gray-100 p-3 text-sm leading-tight font-medium text-blue-900 shadow-sm">
            <span>
              <InfoIcon className="inline-block size-5 text-blue-900" />
            </span>
            Untuk mahasiswa gunakan NIM dan password yang sama seperti di SIA
          </p>
        </div>
        <Form />
        <div className="flex flex-col gap-3 pt-8 pb-4">
          <a href="https://wa.me/6287814043252" target="_blank">
            <h1 className="text-center text-xl font-bold tracking-tight text-blue-900">
              Hotline : 0878-1404-3252
            </h1>
          </a>
          <p className="mx-auto max-w-xs text-center text-sm text-gray-400">
            Civitas akademika wajib menjaga kerahasiaan username dan password
            masing - masing saat menggunakan SSO
          </p>
        </div>
      </div>
    </div>
  );
};

const AnnouncementList = () => {
  const data = ["Card 1", "Card 2", "Card 3"];
  const pengumuman = [
    {
      title:
        "TEMUKAN INFORMASI JURNAL PENELITIAN INTERNASIONAL, NASIONAL, DAN PENGABDIAN DI SINI !!",
      content: "Isi pengumuman 1",
      image: "https://sso.mercubuana-yogya.ac.id/storage/news/poster-lppm.jpeg",
      date: "2023-10-01",
    },
    {
      title: "Stay Safe Online!",
      content: "",
      image:
        "https://sso.mercubuana-yogya.ac.id/storage/news/Poster%20Awarness%20SMKI%20UMBY.jpg",
      date: "2023-10-02",
    },
    {
      title: "Kendala Login Two Step",
      content:
        "Diinformasikan kepada seluruh civitas akademik, jika mengalami kendala redirect dari google, hal ini disebabkan oleh update dari google pada fitur safesearch nya. Untuk saat ini link login two step yang dikirim di email dicopy dan dipaste manual ke browser masing-masing. Demikian yang dapat kami sampaikan, memohon maaf atas ketidaknyamananya. Terima Kasih",
      date: "2023-10-03",
    },
  ];

  return (
    <div className="w-full space-y-4">
      {pengumuman.map((p, key) => (
        <div key={key} className="rounded-lg bg-gray-50 p-4 py-5">
          <div className="space-y-4 text-sm">
            <button>
              <h1 className="text-left text-base font-semibold max-sm:text-sm">
                {p.title}
              </h1>
            </button>
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full rounded-lg" />
            ) : (
              <p className="truncate pr-4">{p.content}</p>
            )}
            <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs">
              <p className="flex items-center gap-2 text-gray-500">
                <Calendar />
                {p.date}
              </p>
              <button>Lihat Selengkapnya</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AnnouncementSection = () => {
  return (
    <div className="w-full">
      <div className="grid w-full space-y-4 lg:pr-4">
        <div className="flex w-full items-center gap-3 rounded-md bg-gray-50 p-3">
          <Megaphone className="size-6 stroke-blue-900" />
          <h1 className="text-xl font-medium">Pengumuman</h1>
        </div>
        <div className="flex h-[80dvh] overflow-hidden overflow-y-scroll rounded-lg">
          <AnnouncementList />
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  return (
    <div className="flex min-h-dvh">
      <div className="mx-auto flex w-full max-w-7xl lg:items-center lg:p-4">
        <div className="flex h-full w-full rounded-lg lg:h-fit">
          <div className="flex w-full flex-col max-lg:gap-4 max-lg:p-4 lg:flex-row-reverse">
            <LoginForm />
            <AnnouncementSection />
          </div>
        </div>
      </div>
    </div>
  );
};
