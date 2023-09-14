export const validarTextArea = (elemento) => {
  const regex = /^\s*$/;
  const texto = elemento.value.trim();
  if (!regex.test(texto) && texto.length >= 4 && texto.length <= 150) {
    return true;
  }
  return false;
};

