import { jwtDecode } from "jwt-decode";

import type { TokenPayload } from "~/types/User";

export const useAuth = () => {
  const token = useCookie("auth_token");

  const user = computed(() => {
    if (!token.value) return null;

    try {
      return jwtDecode<TokenPayload>(token.value);
    } catch {
      return null;
    }
  });

  return {
    user,
  };
};
