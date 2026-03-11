import Produto from "./Produto.js";

export default class ItemSaida {
  constructor() {}

  private _produto: Produto;
  private _quantidade: number;
  private _valor: number;

  Consultar = (): ItemSaida => {
    const item = new ItemSaida();

    return item;
  };
}
