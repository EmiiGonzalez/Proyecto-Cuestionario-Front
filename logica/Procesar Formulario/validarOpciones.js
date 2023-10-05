import { valores, valoresPreguntas } from "../Cuestionario.js";

const validarIdPregunta = (idPregunta) => {
  if (valoresPreguntas.includes(idPregunta) === undefined) {
    throw new Error("Se modifico el id de la pregunta");
  } else {
    return true;
  }
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
    validarValue(valor, idPregunta);
  });
  if (validarIdPregunta(idPregunta)) {
    return true;
  }
  throw new Error("Se modifico el id de la pregunta");
};

const valAbierto = (valorElegido, idPregunta) => {
  if (validarIdPregunta(idPregunta) && validarValue(valorElegido, idPregunta)) {
    return true;
  }
  throw new Error("Se modifico el id de la pregunta");
};

const valEscala = (valorElegido, idPregunta) => {
  return (
    validarValue(valorElegido, idPregunta) && validarIdPregunta(idPregunta)
  );
};

const valSexo = (valorElegido, idPregunta) => {
  return (
    validarValue(valorElegido, idPregunta) && validarIdPregunta(idPregunta)
  );
};

const valUnico = (valorElegido, idPregunta) => {
  return (
    validarValue(valorElegido, idPregunta) && validarIdPregunta(idPregunta)
  );
};

const valFinal = (valorElegido, idPregunta) => {
  return validarIdPregunta(idPregunta);
};

const valRank = (valorElegido, idPregunta) => {
  valorElegido.forEach((valor) => {
    validarValue(valor, idPregunta);
  });
  if (validarIdPregunta(idPregunta)) {
    return true;
  }
  throw new Error("Se modifico el id de la pregunta");
};

const validarValuesPorTipo = {
  abierto: valAbierto,
  abiertoMultiple: valAbiertoMultiple,
  escala: valEscala,
  sexo: valSexo,
  unico: valUnico,
  final: valFinal,
  ranking: valRank,
};

export const validarDato = (valorElegido, idPregunta, tipo) => {
  try {
    const esValido = validarValuesPorTipo[tipo](valorElegido, idPregunta);
    return esValido;
  } catch (error) {
    console.log("ERROR: " + error.message);
    return false;
  }
};
