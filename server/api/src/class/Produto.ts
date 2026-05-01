import type { IProduto } from "../types/TProduto.js";

export default class Produto {
  private _id: number | null;
  private _titulo: String;
  private _autor: String;
  private _serie: String;
  private _volume: String;
  private _isbn13: String;
  private _numPaginas: number;
  private _idioma: String;
  private _dataPublicacao: Date;
  private _genero: String;
  private _classIndicativa: String;
  private _preco: number;
  private _estoque: number;
  private _imgCapa: String | null;

  constructor(produto: IProduto) {
    this._id = produto.id || null;
    this._titulo = produto.titulo;
    this._autor = produto.autor;
    this._serie = produto.serie;
    this._volume = produto.volume;
    this._isbn13 = produto.isbn13;
    this._numPaginas = produto.numPaginas;
    this._idioma = produto.idioma;
    this._dataPublicacao = produto.dataPublicacao;
    this._genero = produto.genero;
    this._classIndicativa = produto.classIndicativa;
    this._preco = produto.preco;
    this._estoque = produto.estoque;
    this._imgCapa = produto.imgCapa || null;
  }

  getId(): number | null {
    return this._id;
  }

  setId(value: number) {
    this._id = value;
  }

  getTitulo(): String {
    return this._titulo;
  }

  setTitulo(value: String) {
    this._titulo = value;
  }

  getAutor(): String {
    return this._autor;
  }

  setAutor(value: String) {
    this._autor = value;
  }

  getSerie(): String {
    return this._serie;
  }

  setSerie(value: String) {
    this._serie = value;
  }

  getVolume(): String {
    return this._volume;
  }

  setVolume(value: String) {
    this._volume = value;
  }

  getIsbn13(): String {
    return this._isbn13;
  }

  setIsbn13(value: String) {
    this._isbn13 = value;
  }

  getNumPaginas(): number {
    return this._numPaginas;
  }

  setNumPaginas(value: number) {
    this._numPaginas = value;
  }

  getIdioma(): String {
    return this._idioma;
  }

  setIdioma(value: String) {
    this._idioma = value;
  }

  getDataPublicacao(): Date {
    return this._dataPublicacao;
  }

  setDataPublicacao(value: Date) {
    this._dataPublicacao = value;
  }

  getGenero(): String {
    return this._genero;
  }

  setGenero(value: String) {
    this._genero = value;
  }

  getClassIndicativa(): String {
    return this._classIndicativa;
  }

  setClassIndicativa(value: String) {
    this._classIndicativa = value;
  }

  getPreco(): number {
    return this._preco;
  }

  setPreco(value: number) {
    this._preco = value;
  }

  getEstoque(): number {
    return this._estoque;
  }

  setEstoque(value: number) {
    this._estoque = value;
  }

  getImgCapa(): String | null {
    return this._imgCapa;
  }

  setImgCapa(value: String) {
    this._imgCapa = value;
  }
}
