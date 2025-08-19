import { Transition } from "@headlessui/react";
import { AlertTriangle, Eye, EyeOff, Lock, User, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nim: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nim" && !/^\d*$/.test(value)) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nim, password } = form;
    if (nim !== "123" || password !== "123") {
      setAlert(true);
      setForm({ nim: "", password: "" }); // Clear form on error
      return;
    }

    fakeAuth.login(() => {
      navigate("/dashboard");
    });

    e.target.reset(); // Reset the form fields
    setAlert(false); // Reset alert on successful login
    setShowPass(false); // Reset password visibility
  };

  return (
    <div className="mx-auto max-w-sm pt-5 select-none">
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="nim"
            placeholder="Masukkan NIM/NIS"
            className="w-full rounded-md border border-gray-300 bg-gray-50 py-3 pr-3 pl-10 focus:outline-none"
            inputMode="numeric"
            pattern="[0-9]*"
            value={form.nim}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <label>
            <Lock className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-gray-400" />
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-10 py-3 focus:outline-none"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </label>
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute top-1/2 right-3.5 -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPass ? (
              <EyeOff className="size-6" />
            ) : (
              <Eye className="size-6" />
            )}
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-900 p-3 font-medium text-white transition-all active:scale-95"
        >
          Login
        </button>
      </form>
    </div>
  );
};
