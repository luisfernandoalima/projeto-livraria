import Registro from "../class/Registro.js";

const calcularPrecoTotal = (registro: Registro[]) => {
  let valor = 0;

  registro.forEach((produto) => {
    valor += produto.getPrecoItens();
  });

  return valor;
};

export default calcularPrecoTotal;
