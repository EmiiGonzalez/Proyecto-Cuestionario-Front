import { valores } from "../Cuestionario.js";

/**
 * Valida un array de entradas y verifica si coincide con el array de valores esperados.
 *
 * @param {array} arrayInputs - El array de entradas a validar.
 * @param {array} ArrayRespuestasCantidad - El array de valores esperados para comparar.
 * @return {boolean} Retorna true si el array de entradas coincide con el array de valores esperados, de lo contrario retorna false.
 */
const validarArray = (arrayInputs, ArrayRespuestasCantidad) => {
  
  let arrayAComparar = [];

  for (let valor of arrayInputs) {
    if (typeof valor === "object" && valor !== null) {
      if (isNaN(Number(valor.respuestaAbierta))) {
        return false;
      }
      arrayAComparar.push(Number(valor.respuestaAbierta));
    }
    if (typeof valor === "string" && valor !== null) {
      if (isNaN(Number(valor))) {
        return false;
      }
      arrayAComparar.push(Number(valor));
    }
  }

  arrayAComparar.sort((a, b) => a - b);

  for (let valor of arrayAComparar) {
    if (!ArrayRespuestasCantidad.includes(valor)) {
      return false;
    }
  }

  return true;
};

/**
 * Valida un valor dado en base a un conjunto de entradas y un valor seleccionado.
 *
 * @param {Array} inputs - el arreglo de valores de entrada
 * @param {any} valorElegido - el valor seleccionado para validar
 * @param {number} idPregunta - el ID de la pregunta
 * @type {array} ArrayRespuestasCantidad - El array de valores esperados para comparar.
 * @return {boolean} true si el valor es válido, false en caso contrario
 */
export const validarDato = (inputs, valorElegido, idPregunta) => {
  const cantidadDeValores = valores[idPregunta];
  let valorNumerico = 1;

  if (Array.isArray(valorElegido)) {
    if (valorElegido.length === 1) {
      valorNumerico = Number(valorElegido[0]);
      if (typeof valorNumerico === "object" && valorNumerico !== null) {
        valorNumerico = Number(valorNumerico.respuestaAbierta);
      }
    } else {
      return validarArray(valorElegido, cantidadDeValores);
    }
  } else if (typeof valorElegido === "string" && valorElegido !== null) {
    valorNumerico = Number(valorElegido);
  }

  for (let i = 0; i < inputs.length; i++) {
    const numeroString = inputs[i].value;
    if (isNaN(Number(numeroString))) {
      return false;
    }
  }

  return cantidadDeValores.includes(valorNumerico);
};

