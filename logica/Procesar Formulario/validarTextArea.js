export const validarTextArea = (elemento) => {
  if (elemento.value.length < 3) {
    return false;
  }
  return true;
};

export const editarMensaje = (elemento, msj) => {
  msj.classList.remove("disabled");
  msj.innerText = "Debe ingresar al menos 3 caracteres";

  setTimeout(() => {
    msj.classList.add("disabled");
  }, 5000);

  elemento.select();
};
