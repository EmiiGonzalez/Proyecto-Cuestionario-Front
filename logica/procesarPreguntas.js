import { capturarAbierto } from "./Procesar Formulario/capturarAbierto.js";
import { capturarAbiertoMultiple } from "./Procesar Formulario/capturarAbiertoMultiple.js";
import { capturarEscala } from "./Procesar Formulario/capturarEscala.js";
import { capturarFinal } from "./Procesar Formulario/capturarFinal.js";
import { capturarSexo } from "./Procesar Formulario/capturarSexo.js";
import { capturarUnico } from "./Procesar Formulario/capturarUnico.js";
import { capturarEdad } from "./Procesar Formulario/capturarEdad.js";

export let resultados = [];

export const procesarFormulario = (formulario) => {
  const btnsSiguiente = formulario.querySelectorAll(".btnSiguiente");
  const primerElemento = formulario.children[0];
  primerElemento.classList.remove('disabled');
  let elementoContador = 0;

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  btnsSiguiente.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const divPadre = btn.parentNode;
      const tipo = divPadre.getAttribute("data-preguntatipo");

      const respueta = capturarRespuesta[tipo](divPadre);

      if (respueta) {
        resultados.push(respueta);
        let elementoActual = formulario.children[elementoContador];
        elementoContador++;
        let elementoSiguiente = formulario.children[elementoContador];

        console.log("elemento actual", elementoActual);
        console.log("elemento siguiente", elementoSiguiente);

        elementoActual.classList.remove('fade-out');
        elementoSiguiente.classList.remove('fade-in');
        
        setTimeout(() => {
          elementoActual.classList.add("disabled");
          elementoSiguiente.classList.remove("disabled");

          elementoActual.classList.add('fade-out');
          elementoSiguiente.classList.add('fade-in');
        } , 500);
      }
    });


  });


};


const capturarRespuesta = {
  unico: capturarUnico,
  escala: capturarEscala,
  abierto: capturarAbierto,
  final: capturarFinal,
  "abierto multiple": capturarAbiertoMultiple,
  edad: capturarEdad,
  sexo: capturarSexo,
};
