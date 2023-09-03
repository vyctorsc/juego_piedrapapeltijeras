//Funcion Random de numer
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🪨"
    }else if (jugada == 2) {
        resultado = "Papel 🧻"
    } else if(jugada == 3) {
        resultado = "Tijeras ✂️"
    } else {
        resultado = "Mal Elegido 😕"
    }
    return resultado
}
//1 es piedra
//2 es papel
//3 es Tijeras
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let empates = 0

while (triunfos < 3 && perdidas < 3) {
    pc = numRandom(1, 3)
    jugador = prompt("Elige: 1.Piedra, 2.Papel, 3.Tijeras")
    //Se le envia lo que eligio cada judaor por parametro o argumentos,
    //llamando o invocando dicha funcion nombrada eleccion.
    alert("PC eligio --> " + eleccion(pc))
    alert("TU eligiste --> " + eleccion(jugador))
    //COMBATE DEL GAME
    if (pc == jugador) {
        alert("EMPATE - ambos eligieron lo mismo")
        empates = empates + 1
    }else if (jugador == 1 && pc == 3) {
        alert("GANASTE ✔️")
        triunfos = triunfos + 1
    }else if (jugador == 2 && pc == 1) {
        alert("GANASTE ✔️")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("GANASTE ✔️")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    } 
}
alert("Ganaste " + triunfos + " Veces. Perdiste " + perdidas + " Veces. Empataron "+ empates + " Veces")
