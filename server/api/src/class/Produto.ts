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

  Consultar = (): Produto => {
    return this;
  };
}
