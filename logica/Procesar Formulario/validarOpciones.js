import { valores, valoresPreguntas } from "../Cuestionario.js";

const validarIdPregunta = (idPregunta) => {
  return valoresPreguntas.includes(idPregunta);
};

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
      throw new Error("Se modifico el valor de la respuesta");
    }
  }

  return true;
};

const validarValue = (value, idPregunta) => {
  if (isNaN(Number(value))) {
    throw new Error(
      "Se modifico el valor de la respuesta a un valor no numérico"
    );
  }
  if (valores[idPregunta].includes(Number(value))) {
    return true;
  } else {
    if (value === null) {
      return false;
    }
    throw new Error(
      "Se modifico el valor de la respuesta a un numero incorrecto"
    );
  }
};


const valAbiertoMultiple = (valorElegido, idPregunta) => {
  valorElegido.forEach((valor) => {
    if (valor.respuestaAbierta) {
      validarValue(valor.respuestaAbierta, idPregunta);
    } else {
      validarValue(valor, idPregunta);
    }
  });
  if (validarIdPregunta(idPregunta)) {
    return true;
  }
  throw new Error("Se modifico el id de la pregunta");
}

const valAbierto = (valorElegido, idPregunta) => {
  if (valorElegido.respuestaAbierta) {
    validarValue(valorElegido.respuestaAbierta, idPregunta);
  } else {
    validarValue(valorElegido, idPregunta);
  }
  if (validarIdPregunta(idPregunta)) {
    return true;
  }
  throw new Error("Se modifico el id de la pregunta");
}

const valEscala = (valorElegido, idPregunta) => {
  return (validarValue(valorElegido, idPregunta) && validarIdPregunta(idPregunta))
}

const valSexo = (valorElegido, idPregunta) => {
  return (validarValue(valorElegido, idPregunta) && validarIdPregunta(idPregunta))
}

const valUnico = (valorElegido, idPregunta) => {
  return (validarValue(valorElegido, idPregunta) && validarIdPregunta(idPregunta))
}

const valFinal = (valorElegido, idPregunta) => {
  return (validarIdPregunta(idPregunta))
}

const validarValuesPorTipo = {
  abierto: valAbierto,
  abiertoMultiple: valAbiertoMultiple,
  escala: valEscala,
  sexo : valSexo, 
  unico : valUnico,
  final : valFinal
}

export const validarDato = (valorElegido, idPregunta, tipo) => {
  try {
    const esValido = validarValuesPorTipo[tipo](valorElegido, idPregunta);

    return esValido;
  } catch (error) {
    console.log("ERROR: " + error.message);
    return false;
  }
};