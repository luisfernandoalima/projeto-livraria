export default class Usuario {
  constructor(id: number, nome: String, email: String, cargo: String) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._cargo = cargo;
  }

  private _id: number;
  private _nome: String;
  private _email: String;
  private _cargo: String;

  getId = (): number => this._id;

  setId = (id: number) => {
    this._id = id;
  };

  getNome = (): String => this._nome;

  setNome = (nome: String) => {
    this._nome = nome;
  };

  getemail = (): String => this._email;

  setEmail = (email: String) => {
    this._email = email;
  };

  getCargo = (): String => this._cargo;

  Create = (): boolean => {
    return false;
  };

  Read = (): boolean => {
    return true;
  };

  Update = (): boolean => {
    return true;
  };

  Delete = (): boolean => {
    return false;
  };

  Login = (): boolean => {
    return false;
  };
}
