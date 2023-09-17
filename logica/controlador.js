export const controladorDePeticiones = (resultados) => {
    
    const datosAEnviar = JSON.stringify(resultados);
    const url = "http://localhost:3000/insertar";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Especifica el tipo de contenido JSON
        },
        body: datosAEnviar
    })
    .then(response => response.json())
    .then(data => {
        const idFormulario = data.id;
        mensajeFinal(idFormulario);
    })
    .catch(error => {
        console.log(error);
    })

}

const mensajeFinal = (id) => {
    console.log(id);
}