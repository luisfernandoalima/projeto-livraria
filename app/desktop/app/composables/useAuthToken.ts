export const useAuthToken = () => {
  const setToken = (token: string) => {
    localStorage.setItem("auth_token", token);
  };

  const getToken = (): string | null => {
    return localStorage.getItem("auth_token");
  };

  const clearToken = () => {
    localStorage.removeItem("auth_token");
  };

  return { setToken, getToken, clearToken };
};
