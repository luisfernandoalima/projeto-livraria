import { ItemEntrada } from "./ProdutoEntrada.js";

export default class Entrada {
  constructor() {}

  private _id: number;
  private _data: Date;
  private _cliente: String;
  private _produtos: ItemEntrada[];
  private _tipoPagamento: String;

  getId = (): number => this._id;

  getData = (): Date => this._data;
  setData = (data: Date): boolean => {
    if (!data || data == null) {
      return false;
    }
    this._data = data;
    return true;
  };

  getCliente = (): String => this._cliente;
  setCliente = (cliente: String): boolean => {
    if (!cliente || cliente == null || cliente == "") {
      return false;
    }

    this._cliente = cliente;
    return true;
  };

  getProdutos = (): ItemEntrada[] => this._produtos;

  getTipoPagamento = (): String => this._tipoPagamento;

  setTipoPagamento = (tipoPagamento: String): boolean => {
    if (!tipoPagamento || tipoPagamento == null || tipoPagamento == "") {
      return false;
    }

    this._tipoPagamento = tipoPagamento;
    return true;
  };
}
