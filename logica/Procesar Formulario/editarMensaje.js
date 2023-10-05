export const editarMensaje = (mensaje, tipoDeError) => {
  const divPadre = mensaje.closest(".cajaPregunta");
  mensaje.classList.remove("disabled");
  mensaje.innerText = mensajes[tipoDeError];
  if (tipoDeError === 3) {
    let textArea = divPadre.querySelector(".textoArea");
    textArea.classList.add("error-elemento");
  } else {
    divPadre.classList.add("error-elemento");
  }
  setTimeout(() => {
    mensaje.classList.add("disabled");
    mensaje.innerText = "";
    divPadre.classList.remove("error-elemento");
  }, 3500); // 5000 milisegundos = 5 segundos
};

const mensajes = {
  1: "Debe seleccionar una opción",
  2: "El valor que se intenta enviar es invalido",
  3: "Debe ingresar al menos 4 caracteres",
  4: "Por favor ingrese un numero entre 1 y 99",
  5: "Limite de caracteres exedido, maximo 180 caracteres",
  6: "Solo se pueden seleccionar hasta 3 respuestas",
  7: "Debe seleccionar mas de una opcion",
  8: "No se admiten respuestas repetidas",
};
