export default class Produto {
  private _id: number | null;
  private _titulo: String;
  private _subtitulo: String;
  private _sinopse: String;
  private _autor: String;
  private _serie: String;
  private _volume: String;
  private _isbn13: String;
  private _formato: String;
  private _numPaginas: number;
  private _idioma: String;
  private _dataPublicacao: Date;
  private _genero: String;
  private _classIndicativa: String;
  private _preco: number;
  private _estoque: String;
  private _status: String;
  private _imgCapa: String | null;

  constructor(
    id: number | null,
    titulo: String,
    subtitulo: String,
    sinopse: String,
    autor: String,
    serie: String,
    volume: String,
    isbn13: String,
    formato: String,
    numPaginas: number,
    idioma: String,
    dataPublicacao: Date,
    genero: String,
    classIndicativa: String,
    preco: number,
    estoque: String,
    status: String,
    imgCapa: String | null,
  ) {
    this._id = id || null;
    this._titulo = titulo;
    this._subtitulo = subtitulo;
    this._sinopse = sinopse;
    this._autor = autor;
    this._serie = serie;
    this._volume = volume;
    this._isbn13 = isbn13;
    this._formato = formato;
    this._numPaginas = numPaginas;
    this._idioma = idioma;
    this._dataPublicacao = dataPublicacao;
    this._genero = genero;
    this._classIndicativa = classIndicativa;
    this._preco = preco;
    this._estoque = estoque;
    this._status = status;
    this._imgCapa = imgCapa || null;
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

  getSubtitulo(): String {
    return this._subtitulo;
  }

  setSubtitulo(value: String) {
    this._subtitulo = value;
  }

  getSinopse(): String {
    return this._sinopse;
  }

  setSinopse(value: String) {
    this._sinopse = value;
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

  getFormato(): String {
    return this._formato;
  }

  setFormato(value: String) {
    this._formato = value;
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

  getEstoque(): String {
    return this._estoque;
  }

  setEstoque(value: String) {
    this._estoque = value;
  }

  getStatus(): String {
    return this._status;
  }

  setStatus(value: String) {
    this._status = value;
  }

  getImgCapa(): String | null {
    return this._imgCapa;
  }

  setImgCapa(value: String) {
    this._imgCapa = value;
  }
}
