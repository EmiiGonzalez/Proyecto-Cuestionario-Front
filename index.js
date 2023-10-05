import { cuestionario } from "./logica/Cuestionario.js";
import { tiposFormulario } from "./logica/generarFormulario.js";
import { procesarFormulario } from "./logica/procesarPreguntas.js";


const formulario = document.getElementById("form");
const btnInicio = document.querySelector(".btnIniciar");


btnInicio.addEventListener("click", () => {
  const cajaInicio = btnInicio.parentNode.parentNode;

  //se esconde la caja de inicio, se genera toda la estructura para el formulario y luego se elimina dicha caja para liberar memoria
  setTimeout(() => {
    cajaInicio.classList.add("fade-out");
    cajaInicio.classList.remove("disabled");
    let footer = document.querySelector(".footer");
    footer.style.display = "none";
    footer.classList.add("fade-out");

    iniciarCuestionario(formulario);


    setTimeout(() => {
      cajaInicio.remove();
    } , 1000);
  } , 500);
})


const iniciarCuestionario = (formulario) => {
  for (const preguntaNumero in cuestionario) {
    let tipo = cuestionario[preguntaNumero].tipo;
    const divGenerar = tiposFormulario[tipo](cuestionario[preguntaNumero]);
    divGenerar.id = preguntaNumero;
    divGenerar.setAttribute("data-preguntatipo", tipo);
    formulario.appendChild(divGenerar);
  
    divGenerar.classList.add("disabled", "transicion-difuminado");
    
  }
  
  procesarFormulario(formulario);
}
