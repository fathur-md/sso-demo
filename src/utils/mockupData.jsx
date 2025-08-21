import { OneDrive } from "@components/dashboard/OneDrive";
import {
  BookOpen,
  Compass,
  GlobeIcon,
  LibrarySquare,
  Mail,
  YoutubeIcon,
} from "lucide-react";

export const loginData = {
  logo: "https://dpm.mercubuana-yogya.ac.id/wp-content/uploads/2023/04/logo-umby-white.png",
  title: "Portal Single Sign-On",
  description:
    "Mahasiswa: gunakan NIM/NIS dan kata sandi yang sama dengan SIA.",
  hotline: "0878-1404-3252",
  hotlineLink: "https://wa.me/6287814043252",
  hotlineText: "Hotline : 0878-1404-3252",
};

export const user = {
  logo: "https://skalastreskerja.mercu.id/wp-content/uploads/2020/10/logonoback.png",
  nim: "240001111",
  name: "John Doe",
  initial: "JD",
  email: "240001111@mahasiswa.mercubuana-yogya.ac.id",
  fakultas: "Teknologi Informasi",
  prodi: "Informatika",
  kampus: "Gejayan",
  angkatan: "2024",
  jenisPerkuliahan: "Reguler pagi [R1]",
  kurikulum: "Teknik Informatika 2021",
  semester: "2",
  sks: "38",
  ips: "3.57",
  ipk: "3.61",
  news: "Demi keamanan akun Anda, mohon untuk melakukan pergantian password secara rutin setiap 3 bulan sekali. Password yang kuat dan diperbarui secara berkala akan membantu melindungi data dan informasi Anda.",
};

export const menuApp = [
  {
    title: "E-Learning Portal",
    logo: <Compass />,
  },
  {
    title: "Sistem Informasi Akademik (SIA)",
    logo: <GlobeIcon />,
  },
  {
    title: "Email Outlook Mahasiswa",
    logo: <Mail />,
  },
  {
    title: "OPAC UMBY (Koleksi Buku Perpustakaan UMBY)",
    logo: <BookOpen />,
  },
  {
    title: "One Drive Mahasiswa",
    logo: <OneDrive />,
  },
  {
    title: "Perpustakaan UMBY",
    logo: <LibrarySquare />,
  },
  {
    title: "Siska (Kemahasiswaan)",
    logo: null,
  },
  {
    title: "Youtube UMBY",
    logo: <YoutubeIcon />,
  },
];

export const pengumuman = [
  {
    title: "README",
    img: null,
    content:
      "Ini adalah demo sistem. Segala konten, logo, dan material yang ditampilkan di sini adalah milik Universitas Mercu Buana Yogyakarta. NIM dan Password untuk login: 123",
    published: "2025-8-20",
  },
  {
    title:
      "TEMUKAN INFORMASI JURNAL PENELITIAN INTERNASIONAL, NASIONAL, DAN PENGABDIAN DI SINI !!",
    img: "https://sso.mercubuana-yogya.ac.id/storage/news/poster-lppm.jpeg",
    content: "",
    published: "2025-8-12",
  },
  {
    title: "Stay Safe Online!",
    img: "https://sso.mercubuana-yogya.ac.id/storage/news/Poster%20Awarness%20SMKI%20UMBY.jpg",
    content: "",
    published: "2025-7-26",
  },
  {
    title: "Kendala Login Two Step",
    img: null,
    content:
      "Diinformasikan kepada seluruh civitas akademik, jika mengalami kendala redirect dari google, hal ini disebabkan oleh update dari google pada fitur safesearch nya. Untuk saat ini link login two step yang dikirim di email dicopy dan dipaste manual ke browser masing-masing. Demikian yang dapat kami sampaikan, memohon maaf atas ketidaknyamananya. Terima Kasih",
    published: "2025-2-28",
  },
];
