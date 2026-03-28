import { pool } from "../database/connection.js";
import Usuario from "../class/Usuario.js";

export default class UsuarioDAO {
  Create = async (user: Usuario) => {
    try {
    } catch (err) {}
  };

  Read = async (id: number) => {
    try {
      const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [
        id,
      ]);
      return result;
    } catch (err) {
      console.error(`Erro ao buscar usuário: ${err}`);
    }
  };

  Update = async (id: number) => {
    try {
    } catch (err) {}
  };

  Delete = async (id: number) => {
    try {
      await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
      return true;
    } catch (err) {
      console.error(`Erro ao buscar usuários: ${err}`);
      return false;
    }
  };

  Login = async (email: string, password: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM usuarios WHERE email=$1 AND senha=$2",
        [email, password],
      );

      if (result.rowCount == 1) return true;
    } catch (err) {
      console.error(`Erro ao buscar usuário: ${err}`);
      return false;
    }
  };

  listUsers = async () => {
    try {
      const result = await pool.query("SELECT * FROM usuarios");
      return result;
    } catch (err) {
      console.error(`Erro ao buscar usuários: ${err}`);
    }
  };
}
