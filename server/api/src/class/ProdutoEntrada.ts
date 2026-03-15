import Entrada from "./Entrada.js";
import Produto from "./Produto.js";
export default class ProdutoEntrada {
  constructor() {}

  private _produto: Produto;
  private _entrada: Entrada;
  private _quantidade: number;
  private _preco: number;
}
