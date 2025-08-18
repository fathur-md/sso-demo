import { Calendar } from "lucide-react";

const data = [
  {
    title:
      "TEMUKAN INFORMASI JURNAL PENELITIAN INTERNASIONAL, NASIONAL, DAN PENGABDIAN DI SINI !!",
    logo: "https://mercubuana-yogya.ac.id/wp-content/uploads/2023/01/logo-mercubuana-yogya.png",
    image: "https://sso.mercubuana-yogya.ac.id/storage/news/poster-lppm.jpeg",
    alt: "Gedung Mercubuana Yogyakarta",

    desc: "Universitas Mercu Buana Yogyakarta",
    date: "13 Augustus 2025",
  },
  {
    title: "Pengumuman Login",
    logo: "https://mercubuana-yogya.ac.id/wp-content/uploads/2023/01/logo-mercubuana-yogya.png",
    image:
      "https://fti.mercubuana-yogya.ac.id/storage/whatsapp-image-2025-02-27-at-141701.jpeg",
    alt: "Gedung Mercubuana Yogyakarta",
    desc: "Universitas Mercu Buana Yogyakarta",
    date: "13 Augustus 2025",
  },
];

export const AnnoucementList = () => {
  return (
    <div className="">
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="space-y-4 rounded-lg p-4 shadow-lg max-lg:shadow-[0_0_10px] max-lg:shadow-gray-400/40"
          >
            <h2 className="text-center text-sm font-semibold text-gray-900 sm:text-lg">
              {item.title}
            </h2>
            <div>
              <img
                src={item.image}
                alt={item.alt}
                className="mx-auto w-full rounded-lg object-contain"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="text-gray-400" />
                <p className="text-left">{item.date}</p>
              </div>
              <button className="font-medium">Lihat Selengkapnya</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
