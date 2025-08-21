import { fakeAuth } from "@utils/auth";
import { Grip } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Bar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fakeAuth.logout(() => {
      navigate("/");
    });
  };
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur-xl md:relative md:h-full">
      <div className="flex h-10 items-center justify-between px-4">
        <div className="flex cursor-pointer items-center gap-1">
          <img
            src="https://skalastreskerja.mercu.id/wp-content/uploads/2020/10/logonoback.png"
            alt="bar logo"
            className="-mt-1 h-6 w-auto"
          />
          <h1 className="text-lg font-semibold tracking-tight">UMBY</h1>
        </div>
        <div className="flex gap-4">
          <button className="">
            <Grip className="size-6" />
          </button>
          <button onClick={handleLogout}>
            <div className="flex size-7.5 items-center justify-center rounded-full bg-gray-500 text-xs">
              <span className="font-semibold text-gray-200">
                {user.initial}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
