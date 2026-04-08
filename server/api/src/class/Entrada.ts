import ProdutoEntrada from "./ProdutoEntrada.js";
import type Usuario from "./Usuario.js";

import type { TEntradaProduto } from "../@types/models.js";

export default class Entrada {
  private _id: number | null;
  private _cupomFiscal: number;
  private _data: Date;
  private _nomeFornecedor: String;
  private _cnpjFornecedor: String;
  private _produtos: TEntradaProduto[];
  private _colaborador: Usuario;

  constructor(
    id: number | null,
    cupomFiscal: number,
    data: Date,
    nomeFornecedor: String,
    cnpjFornecedor: String,
    produtos: TEntradaProduto[],
    colaborador: Usuario,
  ) {
    this._id = id || null;
    this._cupomFiscal = cupomFiscal;
    this._produtos = produtos;
    this._data = data;
    this._nomeFornecedor = nomeFornecedor;
    this._cnpjFornecedor = cnpjFornecedor;
    this._colaborador = colaborador;
  }

  getId = (): number | null => this._id;

  setId = (id: number): boolean => {
    if (!id || id <= 0) {
      return false;
    }
    this._id = id;
    return true;
  };

  getCupomFiscal = () => this._cupomFiscal;

  getData = (): Date => this._data;

  setData = (data: Date): boolean => {
    if (!data) {
      return false;
    }
    this._data = data;
    return true;
  };

  getNomeFornecedor = (): String => this._nomeFornecedor;

  setNomeFornecedor = (nomeFornecedor: String): boolean => {
    if (!nomeFornecedor || nomeFornecedor == "") {
      return false;
    }
    this._nomeFornecedor = nomeFornecedor;
    return true;
  };

  getCnpjFornecedor = (): String => this._cnpjFornecedor;

  setCnpjFornecedor = (cnpjFornecedor: String): boolean => {
    if (!cnpjFornecedor || cnpjFornecedor == "") {
      return false;
    }
    this._cnpjFornecedor = cnpjFornecedor;
    return true;
  };

  getProdutos = (): TEntradaProduto[] => this._produtos;

  setProdutos = (produtos: TEntradaProduto[]): boolean => {
    if (!produtos) {
      return false;
    }
    this._produtos = produtos;
    return true;
  };

  getColaborador = (): Usuario => this._colaborador;

  setColaborador = (colaborador: Usuario): boolean => {
    if (!colaborador) {
      return false;
    }
    this._colaborador = colaborador;
    return true;
  };
}
