import { Transition } from "@headlessui/react";
import { fakeAuth } from "@utils/auth";
import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  nim: "123",
  password: "123",
};

export const Form = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nim: "",
    password: "",
  });
  const [alert, setAlert] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nim" && !/^\d*$/.test(value)) return; // Only allow digits for NIM
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nim, password } = form;
    if (nim !== user.nim || password !== user.password) {
      setAlert(true);
      setForm({ nim: "", password: "" }); // Clear input values on error
      return;
    }

    setIsLoggingIn(true);
    setTimeout(() => {
      fakeAuth.login(() => {
        setForm({ nim: "", password: "" }); // Clear input values on success
        navigate("/dashboard");
      });
    }, 700);
  };

  return (
    <div className="mx-auto max-w-xs">
      {/* ALERT TRANSITION */}
      <Transition
        show={alert}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-2 max-h-0"
        enterTo="opacity-100 translate-y-0 max-h-20"
        leave="transition-all duration-200 ease-in"
        leaveFrom="opacity-100 translate-y-0 max-h-20"
        leaveTo="opacity-0 -translate-y-2 max-h-0"
      >
        <div className="overflow-hidden">
          <div className="mb-4 flex items-center justify-between rounded-sm border-l-6 border-red-700 bg-red-200 p-3 text-sm text-red-800">
            <span className="flex items-center gap-3 select-none">
              <AlertTriangle className="size-5" />
              <p>NIM/NIS atau Password salah</p>
            </span>
            <button
              onClick={() => setAlert(false)}
              className="flex size-6 items-center justify-center"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </Transition>

      <form className="space-y-4 text-base" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nim"
          placeholder="NIM/NIS"
          className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:inset-shadow-sm focus:inset-shadow-gray-300 focus:outline-none"
          inputMode="numeric"
          pattern="[0-9]*"
          value={form.nim}
          onChange={handleChange}
        />
        <input
          type={eyeOpen ? "password" : "text"}
          name="password"
          placeholder="Password"
          className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:inset-shadow-sm focus:inset-shadow-gray-300 focus:outline-none"
          value={form.password}
          onChange={handleChange}
        />
        <label className="flex w-fit items-center gap-2 text-sm font-normal text-gray-500 select-none">
          <input
            type="checkbox"
            className="size-4 rounded border-gray-400 accent-blue-600"
            checked={!eyeOpen}
            onChange={() => setEyeOpen((prev) => !prev)}
          />
          Show Password
        </label>
        <button
          type="submit"
          className="relative mt-2 flex w-full items-center justify-center gap-3 rounded-md bg-blue-900 py-3 font-medium text-white shadow-sm transition-all hover:scale-[1.02] focus:outline-none active:scale-95"
        >
          {isLoggingIn ? (
            <span className="scale-90 animate-pulse">Logging in...</span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};
