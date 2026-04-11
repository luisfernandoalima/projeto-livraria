import Produto from "../class/Produto.js";

export type TEntradaProduto = {
  produto: Produto;
  quantidade: number;
};

export type TSaidaProduto = TEntradaProduto;
