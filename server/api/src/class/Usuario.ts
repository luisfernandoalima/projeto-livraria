export default class Usuario {
  constructor(
    id: number | null,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    cpf: string,
    cargo: number,
  ) {
    this._id = id || null;
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._telefone = telefone;
    this._cpf = cpf;
    this._cargo = cargo;
  }

  private _id: number | null;
  private _nome: string;
  private _email: string;
  private _senha: string;
  private _telefone: string;
  private _cpf: string;
  private _cargo: number;

  getId = (): number | null => this._id;

  setId = (id: number) => {
    this._id = id;
  };

  getNome = (): string => this._nome;

  setNome = (nome: string) => {
    this._nome = nome;
  };

  getEmail = (): string => this._email;

  setEmail = (email: string) => {
    this._email = email;
  };

  setSenha = (senha: string) => (this._senha = senha);
  getSenha = (): string => this._senha;

  setTelefone = (telefone: string) => (this._telefone = telefone);
  getTelefone = (): string => this._telefone;

  setCPF = (cpf: string) => (this._cpf = cpf);
  getCPF = () => this._cpf;

  setCargo = (cargo: number) => (this._cargo = cargo);
  getCargo = (): number => this._cargo;
}
