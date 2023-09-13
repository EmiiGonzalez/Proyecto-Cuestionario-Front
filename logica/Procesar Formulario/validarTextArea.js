export const validarTextArea = (elemento) => {
  if (elemento.value.length < 3) {
    return false;
  }
  return true;
};
