import { useAuthToken } from "./useAuthToken";
import { jwtDecode } from "jwt-decode";

import type { TokenPayload } from "~/types/User";

export const useAuth = () => {
  const { getToken } = useAuthToken();
  const token = getToken();

  const user = computed(() => {
    if (!token) return null;

    try {
      return jwtDecode<TokenPayload>(token);
    } catch {
      return null;
    }
  });

  return {
    user,
  };
};
