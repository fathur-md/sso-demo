import { Avatar } from "@components/dashboard/Avatar";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { fakeAuth } from "@utils/auth";
import { Grip, X } from "lucide-react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    setProfileOpen(false);
    fakeAuth.logout(() => {
      navigate("/");
    });
  };
  return (
    <div className="glass-bg fixed inset-x-4 top-4 z-50 rounded-sm backdrop-blur-xl md:hidden">
      <div className="flex h-12 items-center justify-between px-4">
        <div className="flex cursor-pointer items-center gap-1">
          <img
            src="https://skalastreskerja.mercu.id/wp-content/uploads/2020/10/logonoback.png"
            alt="bar logo"
            className="-mt-1 h-6 w-auto"
          />
          <h1 className="text-lg font-semibold tracking-tight text-blue-950">
            UMBY
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="">
            <Grip className="size-6" />
          </button>
          <button
            onClick={() => setProfileOpen(true)}
            className="flex items-center gap-2"
          >
            <Avatar
              user={user}
              className="flex size-8 items-center justify-center rounded-full bg-blue-900 text-xs"
            />
          </button>
        </div>
      </div>
      {/* Menu Mobile */}
      <Transition show={profileOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          onClose={() => setProfileOpen(false)}
        >
          {/* Background overlay (klik luar area close) */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
          </Transition.Child>

          {/* Menu Panel */}
          <div className="fixed inset-0 flex items-start justify-end p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mt-15 w-40 rounded-lg">
                <button
                  onClick={() => {
                    setProfileOpen(false);
                    handleLogout();
                  }}
                  className="w-full rounded-lg bg-red-700 px-4 py-2 text-left text-sm text-white shadow-lg hover:bg-red-400 active:scale-95"
                >
                  Logout
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
