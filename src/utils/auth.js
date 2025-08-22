import { fetchUserData } from "@services/fetchData";

export const fakeAuth = {
  login: async (nim, password, callback, onError) => {
    try {
      const data = await fetchUserData();
      const user = data.users.find(
        (u) => u.nimLogin === nim.trim() && u.password === password.trim(),
      );
      if (user) {
        localStorage.setItem("auth", JSON.stringify(user));
        callback(user);
      } else {
        onError("NIM/NIS atau Password salah");
      }
    } catch (error) {
      console.error("Login error:", error);
      onError("Terjadi kesalahan saat login");
    }
  },

  logout: (callback) => {
    localStorage.removeItem("auth");
    callback?.();
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("auth");
  },

  getUser: () => {
    const user = localStorage.getItem("auth");
    return user ? JSON.parse(auth) : null;
  },
};
