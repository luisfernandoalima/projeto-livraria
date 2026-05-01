export interface IProduto {
  id: number | null;
  titulo: String;
  autor: String;
  serie: String;
  volume: String;
  isbn13: String;
  numPaginas: number;
  idioma: String;
  dataPublicacao: Date;
  genero: String;
  classIndicativa: String;
  preco: number;
  estoque: number;
  imgCapa: String | null;
}
