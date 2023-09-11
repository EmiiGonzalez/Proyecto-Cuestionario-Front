export const validarOpciones = (mensaje) => {
    mensaje.classList.remove("disabled");
    mensaje.innerText = "Debe seleccionar una opción";

    setTimeout(() => {
      mensaje.classList.add("disabled");
      mensaje.innerText = "";
    }, 5000); // 5000 milisegundos = 5 segundos
}