function numCasillas() {
    let numeroCasillas = parseInt(prompt('Dime el número de casillas:'));
    return numeroCasillas;
}

function anchoCasillas() {
    let widthCasillas = parseFloat(prompt('Dime el ancho de las casillas (px):'));
    return widthCasillas;
}

function pintarAjedrez(pNumCasilla, pAnchoCasilla) {
    let contenido = `<div class="tablero">`

    for (let i = 0; i < `${pNumCasilla}`; i++) {

        contenido += `<div class="fila">`

        for (let j = 0; j < `${pNumCasilla}`; j++) {
            contenido += `<div style="border: 1px solid #000; width: ${pAnchoCasilla}px; height: ${pAnchoCasilla}px;"></div>`
        }
        contenido += `</div>`
    }
    contenido += `</div>`
    document.write(contenido);
}

let numCasilla = numCasillas();
let anchoCasilla = anchoCasillas();
pintarAjedrez(numCasilla, anchoCasilla);
