import { Calendar } from "lucide-react";

const data = [
  {
    title: "Pengumuman Login",
    logo: "https://mercubuana-yogya.ac.id/wp-content/uploads/2023/01/logo-mercubuana-yogya.png",
    image:
      "https://fti.mercubuana-yogya.ac.id/storage/whatsapp-image-2025-02-27-at-141701.jpeg",
    alt: "Gedung Mercubuana Yogyakarta",

    desc: "Universitas Mercu Buana Yogyakarta",
    footer: "13 Augustus 2025",
  },
];

export const AnnoucementList = () => {
  return (
    <div className="overflow-y-scroll rounded-lg p-4 shadow-lg max-lg:shadow-[0_0_10px] max-lg:shadow-gray-400/40">
      <div>
        {data.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-center text-xl font-semibold text-gray-900">
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
                <p className="text-left">{item.footer}</p>
              </div>
              <button className="font-medium">Lihat Selengkapnya</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
