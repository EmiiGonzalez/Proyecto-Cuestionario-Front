export const validarOpciones = (mensaje) => {
    const divPadre = mensaje.closest(".cajaPregunta");
    mensaje.classList.remove("disabled");
    mensaje.innerText = "Debe seleccionar una opción";
    divPadre.classList.add("error-elemento");

    setTimeout(() => {
      mensaje.classList.add("disabled");
      mensaje.innerText = "";
      divPadre.classList.remove("error-elemento");
    }, 3500); // 5000 milisegundos = 5 segundos
}