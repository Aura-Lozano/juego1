let repartio = false;
let cartas = [];

function repartir() {
    let tablero = document.getElementById("tablero");
    tablero.innerHTML = ""
    const TOTAL_CARTAS = 10;
    cartas = [];
    for (let i = 0; i < TOTAL_CARTAS; i++) {
        let carta = document.createElement("img");
        let indice = Math.floor(Math.random() * 52) + 1;
        cartas.push(indice);
        carta.src = "imagenes/Cartas/cartas/carta" + indice + ".jpg";
        tablero.appendChild(carta);
    }
    const audio = new Audio("Sonidos/repartir.mp3");
    audio.play().then(() => {
        window.alert("Bienvenido al juego");
    })
    repartio = true;
}

function verificar() {
    if (!repartio) {
        window.alert("No se ha repartido las cartas");
    }
    else {
        contadores = new Array(13).fill(0);
        for (let i = 0; i < cartas.length; i++) {
            let posicion=cartas[i] %13;
            if (posicion==0) {
                posicion = 12;
            }
            else {
                posicion --;
            }
            contadores[posicion]++;
        }
        nombreCartas=["As", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Jack", "Queen", "King"]
        let mensaje ="Se encontraron los siguiente grupos:\n";
        grupos=["Vacio", "Non", "Par", "Terna", "Cuarta", "Quinta", "Sexta", "Septima", "Octava", "Novena", "Decima"]
        for (let i = 0; i < contadores.length; i++) {
            if (contadores[i]>=2) {
                mensaje += grupos[contadores[i]] + " de " + nombreCartas[i] + "\n";
            }
    }
    window.alert(mensaje);
}
}