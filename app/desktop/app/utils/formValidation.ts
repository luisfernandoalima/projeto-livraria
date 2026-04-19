import type { LoginUser } from "./../types/User";

type Error = {
  [key: string]: string;
};

export const validateLogin = (data: LoginUser) => {
  const errors: Error = {};

  if (!data.email) errors["email"] = "O e-mail é obrigatório";
  if (!data.password) errors["password"] = "a senha é obrigatória";

  return errors;
};
