import Produto from "../class/Produto.js";

export class ProdutoDAO {
  Criar = (): boolean => {
    return true;
  };

  Alterar = (produto: Produto): boolean => {
    return true;
  };

  Consultar = (id: number): Produto => {
    let produto = new Produto();
    return produto;
  };

  Excluir = (id: number): boolean => {
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

  salvarEstoque = (id: number): boolean => {
    return true;
  };
}
