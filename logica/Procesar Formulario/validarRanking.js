export const validarRanking = (string) => {
    let array = string.split("");

    let arrayAux = [];
    let repetido = false;

    array.forEach((valor) => {
        if (arrayAux.includes(valor)) {
            repetido = true;
        }
        arrayAux.push(valor);
    })

    return repetido;
}

export const validarCheckRanking = (string) => {
    let array = string.split("");
    let longitud = array.length;


    const ninguno = (longitud === 0);
    const unosolo = (longitud === 1);

    return {
        ninguno,
        unosolo
    }

}