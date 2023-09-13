import { valores, valoresPreguntas } from "../Cuestionario.js";

const validarIdPregunta = (idPregunta) => {
  return valoresPreguntas.includes(idPregunta);
}

/**
 * Valida un array de inputs contra un array de respuestas esperadas.
 *
 * @param {Array} arrayInputs - El array de inputs a validar.
 * @param {Array} ArrayRespuestasCantidad - El array de respuestas esperadas.
 * @return {boolean} Retorna true si los inputs del array son válidos, de lo contrario retorna false.
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
      console.log("este valor no va " + valor);
      return false;
    }
  }

  return true;
};

/**
 * Valida los datos proporcionados basándose en los inputs, el valor elegido y el ID de la pregunta.
 *
 * @param {Array} inputs - Un array de inputs.
 * @param {string|number|Array} valorElegido - El valor elegido.
 * @param {number} idPregunta - El ID de la pregunta.
 * @type {Array} - cantidadDeValores array con los values de las preguntas para validar
 * @return {boolean} Retorna true si los datos son válidos, de lo contrario false.
 */
export const validarDato = (inputs, valorElegido, idPregunta) => {
  try {
    const cantidadDeValores = valores[idPregunta];
    let valorNumerico = 1;

    //para preguntas con opcion otro pero de unica opcion
    if (
      typeof valorElegido === "object" &&
      valorElegido !== null &&
      valorElegido.length === 1
    ) {
      valorElegido.forEach((valor) => {
        valorNumerico = Number(valor);
        if (typeof valor === "object" && valor !== null) {
          valorNumerico = Number(valor.respuestaAbierta);
        }
      });
    }
    //para preguntas con opcion multiple y otros
    if (
      typeof valorElegido === "object" &&
      valorElegido !== null &&
      valorElegido.length > 1
    ) {
      return (
        validarArray(valorElegido, cantidadDeValores)
      );
    }
    //para preguntas con opcion unica

    if (typeof valorElegido === "string" && valorElegido !== null) {
      
      if (validarIdPregunta(idPregunta) === false) {
        throw new Error("Se modifico el id de la pregunta");
      }
      valorNumerico = Number(valorElegido);
      
      
    }

    /*Este fragmento de código itera sobre un array de inputs, verifica si cada value es un número y devuelve false si alguna entrada no es un número.*/
    for (let i = 0; i < inputs.length; i++) {
      const numeroString = inputs[i].value;
      if (isNaN(Number(numeroString))) {
        return false;
      }
    }
    return cantidadDeValores.includes(valorNumerico);
  } catch (error) {
    return false;
  }
};
