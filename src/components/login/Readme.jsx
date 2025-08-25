import { ExternalLink, Github, Info, TriangleAlert } from "lucide-react";
import { motion } from "motion/react";

export const ReadmeDefault = ({ setSelected, card }) => {
  return (
    <div
      className="flex cursor-pointer"
      onClick={() => setSelected(card.title)}
    >
      <motion.div
        layoutId="card-readme"
        className="relative w-full space-y-4 overflow-hidden rounded-2xl bg-gray-50 p-4"
      >
        {/* readme title  */}
        <motion.div
          layoutId="readme-title"
          className="relative flex items-center justify-between gap-2 font-semibold text-zinc-800"
        >
          <h1 className="flex gap-2 text-blue-800">
            <Info />
            <motion.span layoutId="readme-text">README</motion.span>
          </h1>
          <a
            href=""
            className="pointer-events-none opacity-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="size-5" />
          </a>
        </motion.div>
        {/* readme description */}
        <motion.div
          layoutId="readme-desc"
          className="relative space-y-2 overflow-hidden rounded-lg bg-blue-100 p-4 text-zinc-700"
        >
          <motion.p layoutId="readme-detail" className="h-1 overflow-hidden">
            Website ini adalah <b>Demo Student SSO Portal</b> yang dibuat hanya
            untuk tujuan pembelajaran. Portal ini <b>bukan</b> portal resmi dan
            tidak menyimpan data mahasiswa sebenarnya.
          </motion.p>
          <h2 className="font-semibold">👉 Silahkan Login Dengan:</h2>
          <div className="grid grid-cols-[auto_1fr] gap-1 font-semibold text-zinc-800">
            <span className="pr-8">NIM/NIS</span>
            <span>: 123</span>
            <span>Password</span>
            <span>: 123</span>
          </div>
          <div className="flex items-center gap-2 pt-2 font-semibold text-red-600">
            <TriangleAlert className="size-5 text-red-600" />
            <p>Jangan memasukkan data pribadi Anda</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ReadmeOpen = ({ onClose }) => {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-100 overflow-hidden bg-black/80"
      />
      <div
        onClick={onClose}
        className="fixed inset-0 z-110 grid overflow-y-auto p-4"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          layoutId="card-readme"
          className="relative mx-auto my-auto w-full max-w-xl space-y-4 overflow-hidden rounded-2xl bg-white p-4"
        >
          {/* readme title  */}
          <motion.div
            layoutId="readme-title"
            className="relative flex items-center justify-between gap-2 font-semibold text-zinc-800"
          >
            <h1 className="flex gap-2 text-blue-800">
              <Info />
              <motion.span layoutId="readme-text">README</motion.span>
            </h1>
            <a
              href="https://github.com/fathur-md/sso-demo#readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-1 text-blue-800">
                <span className="flex items-center gap-1 text-sm">
                  fathur-md
                  <Github className="size-4" />
                </span>
                <ExternalLink className="size-5" />
              </div>
            </a>
          </motion.div>

          {/* readme description */}
          <motion.div
            layoutId="readme-desc"
            className="space-y-2 rounded-lg bg-blue-100 p-4 text-zinc-700"
          >
            <motion.p
              layoutId="readme-detail"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Website ini adalah <b>Demo Student SSO Portal</b> yang dibuat
              hanya untuk tujuan pembelajaran. Portal ini <b>bukan</b> portal
              resmi dan tidak menyimpan data mahasiswa sebenarnya.
            </motion.p>
            <h2 className="py-2 font-semibold">👉 Silahkan Login Dengan:</h2>
            <div className="grid grid-cols-[auto_1fr] gap-1 font-semibold text-zinc-800">
              <span className="pr-8">NIM/NIS</span>
              <span>: 123</span>
              <span>Password</span>
              <span>: 123</span>
            </div>
            <div className="flex items-center gap-2 pt-2 font-semibold text-red-600">
              <TriangleAlert className="size-5 text-red-600" />
              <p>Jangan memasukkan data pribadi Anda</p>
            </div>
          </motion.div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg bg-red-400 px-4 py-2 font-medium text-white"
            >
              Saya mengerti
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};
