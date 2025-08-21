export const fakeAuth = {
  login: (nim, password, callback, onError) => {
    if (nim === "123" && password === "123") {
      localStorage.setItem("auth", "true");
      callback();
    } else {
      onError();
    }
  },
  logout: (callback) => {
    localStorage.removeItem("auth");
    callback();
  },
  isAuthenticated: () => {
    return !!localStorage.getItem("auth");
  },

  // isAuthenticated: !!localStorage.getItem("token"),

  // login(callback) {
  //   localStorage.setItem("token", "fake-token");
  //   this.isAuthenticated = true;
  //   setTimeout(callback, 100); // Simulate async login
  // },
  // logout(callback) {
  //   localStorage.removeItem("token");
  //   this.isAuthenticated = false;
  //   setTimeout(callback, 100); // Simulate async logout
  // },
};
