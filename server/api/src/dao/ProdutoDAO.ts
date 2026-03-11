import Produto from "../class/Produto.js";

export class ProdutoDAO {
  Criar = (): boolean => {
    return true;
  };

  Alterar = (): boolean => {
    return true;
  };

  Consultar = (): Produto => {
    let produto = new Produto();
    return produto;
  };

  Excluir = (): boolean => {
    return true;
  };

  Listar = (): Produto[] => {
    let produto1 = new Produto();
    let produto2 = new Produto();

    let produtos = [produto1, produto2];

    return produtos;
  };

  gerarRelatorio = (): Produto[] => {
    let produto1 = new Produto();
    let produto2 = new Produto();

    let produtos = [produto1, produto2];

    return produtos;
  };

  salvarEstoque = (): boolean => {
    return true;
  };
}
