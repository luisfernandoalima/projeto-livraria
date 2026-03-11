export default class Produto {
  private _id: number;
  private _titulo: String;
  private _subtitulo: String;
  private _sinopse: String;
  private _autor: String;
  private _serie: String;
  private _volume: String;
  private _isbn10: String;
  private _isbn13: String;
  private _formato: String;
  private _numPaginas: number;
  private _idioma: String;
  private _dataPublicacao: Date;
  private _genero: String;
  private _classIndicativa: String;
  private _precoDouble: String;
  private _estoque: String;
  private _status: String;
  private _imgCapa: String;

  constructor(
    id: number,
    titulo: String,
    subtitulo: String,
    sinopse: String,
    autor: String,
    serie: String,
    volume: String,
    isbn10: String,
    isbn13: String,
    formato: String,
    numPaginas: number,
    idioma: String,
    dataPublicacao: Date,
    genero: String,
    classIndicativa: String,
    precoDouble: String,
    estoque: String,
    status: String,
    imgCapa: String,
  ) {
    this._id = id;
    this._titulo = titulo;
    this._subtitulo = subtitulo;
    this._sinopse = sinopse;
    this._autor = autor;
    this._serie = serie;
    this._volume = volume;
    this._isbn10 = isbn10;
    this._isbn13 = isbn13;
    this._formato = formato;
    this._numPaginas = numPaginas;
    this._idioma = idioma;
    this._dataPublicacao = dataPublicacao;
    this._genero = genero;
    this._classIndicativa = classIndicativa;
    this._precoDouble = precoDouble;
    this._estoque = estoque;
    this._status = status;
    this._imgCapa = imgCapa;
  }
}
