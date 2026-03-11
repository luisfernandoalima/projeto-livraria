import Usuario from "../class/Usuario.js";

export default class UserDAO {
  Create = async (user: Usuario) => {
    return true;
  };

  Read = async (email: String) => {
    return true;
  };
}
