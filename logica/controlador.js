import { mensajeFinal } from "./mensajeFinal.js";
export const controladorDePeticiones = (resultados, formularioDiv) => {
    
    const datosAEnviar = JSON.stringify(resultados);
    const url = "http://localhost:3000/rFormWeb";
    formularioDiv.children[0].remove();

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Especifica el tipo de contenido JSON
        },
        body: datosAEnviar
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const idFormulario = data.idcuestn;
        formularioDiv.appendChild(mensajeFinal(idFormulario, true));
    })
    .catch(error => {
        console.log(error);
        formularioDiv.appendChild(mensajeFinal(null, false));
    })

}
