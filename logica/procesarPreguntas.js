import { capturarAbierto } from "./Procesar Formulario/capturarAbierto.js";
import { filtrarPorTipoR } from "./filtrarResultados.js";
import { capturarAbiertoMultiple } from "./Procesar Formulario/capturarAbiertoMultiple.js";
import { capturarEscala } from "./Procesar Formulario/capturarEscala.js";
import { capturarFinal } from "./Procesar Formulario/capturarFinal.js";
import { capturarSexo } from "./Procesar Formulario/capturarSexo.js";
import { capturarUnico } from "./Procesar Formulario/capturarUnico.js";
import { capturarEdad } from "./Procesar Formulario/capturarEdad.js";
import { controladorDePeticiones } from "./controlador.js";

export const procesarFormulario = (formulario) => {
  const btnsSiguiente = formulario.querySelectorAll(".btnSiguiente");
  const primerElemento = formulario.children[0];
  primerElemento.classList.remove('disabled');

  const cantidadPreguntas = formulario.children.length;
  let contadorPreguntas = 0;
  let resultados = [];

  btnsSiguiente.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const divPadre = btn.parentNode;
      const tipo = divPadre.getAttribute("data-preguntatipo");

      //valido y capturo la respuesta de la pregunta
      const respueta = capturarRespuesta[tipo](divPadre);

      //si hay respuesta, muestro el siguiente elemento
      if (respueta) {
        btn.disabled = true;
        resultados.push(respueta);
        let elementoActual = formulario.firstElementChild;
        let elementoSiguiente = formulario.children[1];

        setTimeout(() => {
          elementoActual.classList.add("fade-in");
        }, 500);

        elementoActual.classList.remove('fade-out');
        elementoSiguiente.classList.remove('fade-in');

        
        setTimeout(() => {
          elementoActual.classList.add("disabled");
          elementoSiguiente.classList.remove("disabled");

          elementoActual.classList.add('fade-out');
          elementoSiguiente.classList.add('fade-in');
          elementoActual.remove();
        } , 500);
        contadorPreguntas++;
        
      }
      console.log(resultados);
    });
  });

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const elementoFinal = document.querySelector('div[data-preguntatipo="final"]');
    const tipo = elementoFinal.getAttribute("data-preguntatipo");
    const respueta = capturarRespuesta[tipo](elementoFinal);
    contadorPreguntas++;
    
    console.log(resultados);
    if (respueta && cantidadPreguntas === contadorPreguntas) {
      resultados.push(respueta);
      controladorDePeticiones(resultados, formulario);
      
    }
  });
  
};


const capturarRespuesta = {
  unico: capturarUnico,
  escala: capturarEscala,
  final: capturarFinal,
  "abierto multiple": capturarAbiertoMultiple,
  edad: capturarEdad,
  sexo: capturarSexo,
};
