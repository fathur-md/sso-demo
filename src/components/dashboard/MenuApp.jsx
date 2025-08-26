import {
  BookCopy,
  Compass,
  GraduationCap,
  LibraryBig,
  LucideYoutube,
  Mail,
  UniversityIcon,
} from "lucide-react";
import OneDriveIcon from "@assets/onedrive.svg";

const menuAppContent = [
  {
    title: "E-Learning Portal",
    icon: GraduationCap,
    img: null,
    id: "e-learning",
  },
  {
    title: "Sistem Informasi Akademik (SIA)",
    icon: UniversityIcon,
    img: "https://skalastreskerja.mercu.id/wp-content/uploads/2020/10/logonoback.png",
    id: "siakad",
  },
  {
    title: "Email Outlook Mahasiswa",
    icon: Mail,
    img: null,
    id: "email",
  },
  {
    title: "OPAC UMBY (Koleksi Buku Perpustakaan UMBY)",
    icon: BookCopy,
    img: null,
    id: "opac",
  },
  {
    title: "One Drive Mahasiswa",
    icon: null,
    img: OneDriveIcon,
    id: "onedrive",
  },
  {
    title: "Perpustakaan UMBY",
    icon: LibraryBig,
    img: null,
  },
  {
    title: "Siska (Kemahasiswaan)",
    icon: null,
    img: "https://skalastreskerja.mercu.id/wp-content/uploads/2020/10/logonoback.png",
    id: "siska",
  },
  {
    title: "Youtube UMBY",
    icon: LucideYoutube,
    img: null,
    id: "youtube",
  },
];

export const MenuApp = () => {
  return (
    <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:auto-rows-[minmax(0,7rem)] md:grid-cols-3 xl:grid-cols-4">
      {menuAppContent.map(({ title, icon: Icon, img }) => (
        <MenuItem key={title} Icon={Icon} title={title} img={img} />
      ))}
    </div>
  );
};

const MenuItem = ({ Icon, title, img }) => {
  return (
    <div className="glass-bg flex h-full cursor-pointer items-center justify-start gap-4 rounded-lg px-3 py-4 backdrop-blur-xl transition-all hover:scale-[102%] active:scale-100">
      <div className="color flex size-12 items-center justify-center text-blue-900 dark:text-blue-300">
        {Icon ? (
          <Icon className="size-10" />
        ) : img ? (
          <img
            src={img}
            alt="OneDrive"
            className="min-w-12 object-contain p-1.5"
          />
        ) : (
          <span>No Icon or Image</span>
        )}
      </div>
      <div>
        <span className="font-semibold">{title}</span>
      </div>
    </div>
  );
};
