export const validarTextArea = (elemento) => {
  if (elemento.value.length < 3) {
    return false;
  }
  return true;
};

export const editarMensaje = (elemento, msj) => {
  msj.classList.remove("disabled");
  msj.innerText = "Debe ingresar al menos 3 caracteres";
  elemento.classList.add("error-elemento");

  setTimeout(() => {
    msj.classList.add("disabled");
    elemento.classList.remove("error-elemento");
  }, 3000);

  elemento.select();
};
