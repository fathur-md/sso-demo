export const useAuth = () => {
  try {
    return JSON.parse(localStorage.getItem("auth")) || null;
  } catch {
    return null;
  }
};
