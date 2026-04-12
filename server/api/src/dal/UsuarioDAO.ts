import { pool } from "../database/connection.js";
import Usuario from "../class/Usuario.js";

export default class UsuarioDAO {
  Create = async (user: Usuario) => {
    try {
      await pool.query(
        "INSERT INTO usuario VALUES (default, $1, $2, $3, $4, $5, $6)",
        [
          user.getNome(),
          user.getEmail(),
          user.getSenha(),
          user.getTelefone(),
          user.getCPF(),
          user.getCargo(),
        ],
      );
      return true;
    } catch (err) {
      console.error(`Erro ao cadastrar usuário: ${err}`);
      return false;
    }
  };

  Read = async (id: number) => {
    try {
      const result = await pool.query("SELECT * FROM usuario WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (err) {
      console.error(`Erro ao buscar usuário: ${err}`);
    }
  };

  Update = async (updatedUser: Usuario) => {
    try {
      await pool.query(
        "UPDATE usuario SET nome = $1, email = $2, senha = $3, telefone = $4, cpf = $5, funcao = $6 WHERE id = $7",
        [
          updatedUser.getNome(),
          updatedUser.getEmail(),
          updatedUser.getSenha(),
          updatedUser.getTelefone(),
          updatedUser.getCPF(),
          updatedUser.getCargo(),
          updatedUser.getId(),
        ],
      );
      return true;
    } catch (err) {
      console.error(`Erro ao atualizar usuário: ${err}`);
      return false;
    }
  };

  Delete = async (id: number) => {
    try {
      await pool.query("DELETE FROM usuario WHERE id = $1", [id]);
      return true;
    } catch (err) {
      console.error(`Erro ao buscar usuários: ${err}`);
      return false;
    }
  };

  Login = async (email: string, password: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM usuario WHERE email=$1 AND senha=$2",
        [email, password],
      );

      if (result.rowCount == 1) return result.rows[0];
    } catch (err) {
      console.error(`Erro ao buscar usuário: ${err}`);
      return false;
    }
  };

  listUsers = async () => {
    try {
      const result = await pool.query("SELECT * FROM usuario");
      return result;
    } catch (err) {
      console.error(`Erro ao buscar usuários: ${err}`);
    }
  };
}
