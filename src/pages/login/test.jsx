import { useState, useEffect } from "react";
import { Eye, EyeOff, Lock, User, Moon, Sun } from "lucide-react";

// Minimal, Apple‑like redesign of the SSO page.
// Primary color remains Tailwind's bg-blue-900.
// Two-panel layout: Login (left), Announcements (right).
// Subtle glass + soft shadows, large pleasant typography.

export default function SSOPage() {
  const [showPw, setShowPw] = useState(false);
  const [dark, setDark] = useState(false);

  // Enable dark mode by toggling document.documentElement.classList
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen w-full font-['SF_Pro_Display',ui-sans-serif,system-ui]">
      {/* Background */}
      <div className="relative isolate min-h-screen bg-blue-900 transition-colors duration-300">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
          <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_50%_-10%,#ffffff40,transparent)]" />
        </div>

        {/* Top bar */}
        <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 text-white/90">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-sm/none tracking-wide text-white/80">Universitas Mercu Buana Yogyakarta</span>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-xs text-white/90 backdrop-blur transition hover:bg-white/15"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            {dark ? "Light" : "Dark"} Mode
          </button>
        </header>

        {/* Content card */}
        <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-10 sm:pb-16 md:gap-8 lg:grid-cols-2">
          <section
            className="rounded-3xl bg-white p-8 shadow-2xl shadow-black/10 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/90 dark:ring-white/10 md:p-10"
          >
            <div className="mb-8 flex items-center gap-4">
              <Logo big />
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
                  Portal Single Sign‑On
                </h1>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Mahasiswa: gunakan NIM/NIS dan kata sandi yang sama dengan SIA.
                </p>
              </div>
            </div>

            <form className="space-y-4">
              <Field label="NIM/NIS">
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Masukkan NIM/NIS"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-10 py-3 text-zinc-900 outline-none ring-0 placeholder:text-zinc-400 focus:border-blue-500 focus:shadow-[0_0_0_3px] focus:shadow-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  />
                </div>
              </Field>

              <Field label="Kata Sandi">
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
                  <input
                    type={showPw ? "text" : "password"}
                    placeholder="Kata sandi"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-10 py-3 pr-12 text-zinc-900 outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px] focus:shadow-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-zinc-500 hover:bg-zinc-100 active:scale-[.98] dark:hover:bg-zinc-800"
                    aria-label={showPw ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                  >
                    {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </Field>

              <button
                type="submit"
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-900 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/20 transition active:scale-[.99] hover:bg-blue-800"
              >
                Masuk
              </button>

              <p className="pt-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
                Hotline: <a href="tel:+62878140432552" className="underline decoration-zinc-300 underline-offset-2 hover:text-zinc-700 dark:decoration-zinc-700 dark:hover:text-zinc-200">0878‑14043‑2552</a>
              </p>
            </form>
          </section>

          <section
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: .05 }}
            className="rounded-3xl bg-white/95 p-6 shadow-2xl shadow-black/10 ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/90 dark:ring-white/10 md:p-8"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-2xl">
                Pengumuman
              </h2>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900 ring-1 ring-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:ring-blue-900/40">
                Baru
              </span>
            </div>

            {/* Announcement Card */}
            <div className="mt-5 grid grid-cols-1 gap-4 md:mt-6">
              <AnnouncementCard
                title="Daftar Jurnal & Penelitian"
                body="Temukan informasi jurnal penelitian internasional, nasional, dan pengabdian."
              />
              <AnnouncementCard
                title="Pemeliharaan Sistem"
                body="Portal SSO akan mengalami pemeliharaan terjadwal pada Sabtu, 21.00–23.00 WIB."
              />
              <AnnouncementCard
                title="Panduan Keamanan Akun"
                body="Jangan bagikan kata sandi. Aktifkan verifikasi dua langkah bila tersedia."
              />
            </div>
          </section>
        </main>

        {/* Subtle footer */}
        <footer className="mx-auto max-w-6xl px-6 pb-10 text-xs text-white/60">
          © {new Date().getFullYear()} Universitas Mercu Buana Yogyakarta — SSO
        </footer>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium tracking-wide text-zinc-700 dark:text-zinc-300">{label}</span>
      {children}
    </label>
  );
}

function AnnouncementCard({ title, body }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50/80 p-5 transition hover:border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900">
      {/* decorative */}
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-300/0 blur-2xl" />
      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{body}</p>
      <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-900 opacity-80 transition group-hover:opacity-100 dark:text-blue-200">
        Lihat selengkapnya
        <svg viewBox="0 0 24 24" className="size-3 fill-current" aria-hidden>
          <path d="M13 5l7 7-7 7v-4H4v-6h9V5z"/>
        </svg>
      </div>
    </div>
  );
}

function Logo({ big = false }) {
  return (
    <div className={big ? "size-12" : "size-7"} aria-label="Logo UMBY">
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
        <path fill="url(#g)" d="M32 4c8 10 14 18 14 28s-6 18-14 28C24 50 18 42 18 32S24 14 32 4z" />
      </svg>
    </div>
  );
}
