export const fakeAuth = {
  isAuthenticated: !!localStorage.getItem("token"),

  login(callback) {
    localStorage.setItem("token", "fake-token");
    this.isAuthenticated = true;
    setTimeout(callback, 100); // Simulate async login
  },
  logout(callback) {
    localStorage.removeItem("token");
    this.isAuthenticated = false;
    setTimeout(callback, 100); // Simulate async logout
  },
};
