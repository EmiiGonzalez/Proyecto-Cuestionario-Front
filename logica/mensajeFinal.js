export const mensajeFinal = (idcuest, boolean) => {
  if (boolean) {
    const divPadre = document.createElement("div");
    divPadre.classList.add("mensajeFinal");

    const mensajeTitulo = document.createElement("p");
    const divSuccess = document.createElement("div");
    const mensaje2 = document.createElement("p");

    divPadre.appendChild(mensajeTitulo);
    mensajeTitulo.innerText =
      "El cuestionario ha sido enviado con éxito, muchas gracias por participar!";
    mensajeTitulo.classList.add("mensajeTitulo");

    divPadre.appendChild(divSuccess);
    divSuccess.classList.add("success-animation");
    divSuccess.innerHTML = `<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 52 52">
  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>`;

    divSuccess.appendChild(mensaje2);
    mensaje2.classList.add("mensaje2");
    mensaje2.innerText = `Su cuestionario fue el numero: ${idcuest}`;

    return divPadre;
  }
  else {
    const divPadre = document.createElement("div");
    divPadre.classList.add("mensajeFinal");

    const mensajeTitulo = document.createElement("p");

    divPadre.appendChild(mensajeTitulo);
    mensajeTitulo.innerText =
      "Ocurrio un error al enviar el cuestionario, intente nuevamente";
    mensajeTitulo.classList.add("mensajeTitulo");
    mensajeTitulo.style.color = "red";

    return divPadre;
  }

};
