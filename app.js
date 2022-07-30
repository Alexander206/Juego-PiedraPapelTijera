/* let btnJugar = document.querySelector(".btnJugar"); */
let btnPiedra = document.querySelector(".Piedra");
let btnPapel = document.querySelector(".Papel");
let btnTijera = document.querySelector(".Tijera");
let imgPartida = document.querySelector(".centro");
let text = document.querySelector(".centroText");
let imgPiedra = document.querySelector(".PcPiedra");
let imgPapel = document.querySelector(".PcPapel");
let imgTijera = document.querySelector(".PcTijera");
let jugadorPuntaje = document.querySelector(".jugadorText");
let pcPuntaje = document.querySelector(".pcText");
var valor = 0;
var pc = 4;
var ganadas = 0;
var perdidas = 0;
var win = Boolean;

//optenemos la desición del usuario y la decición de la PC y se guarda en la variable "pc" y "valor" con palabra reservada var

btnPiedra.addEventListener("click", btnPiedraClick);
btnPapel.addEventListener("click", btnPapelClick);
btnTijera.addEventListener("click", btnTijeraClick);

function btnPiedraClick() {
  valor = btnPiedra.value;
  pc = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  calcularJugada(valor, pc);
  ModificarBtnPC(pc);
}

function btnPapelClick() {
  valor = btnPapel.value;
  pc = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  calcularJugada(valor, pc);
  ModificarBtnPC(pc);
}

function btnTijeraClick() {
  valor = btnTijera.value;
  pc = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  calcularJugada(valor, pc);
  ModificarBtnPC(pc);
}

function calcularJugada(valor, pc) {
  // Optenemos mediante condicionales de if anidados, el ganador, perdedor o empate

  // Empate
  if (valor == pc) {
    imgPartida.className = "centroEmpate";
    text.innerText = "¿Empate?";
  }

  // Ganar
  else if (valor == 1 && pc == 3) {
    imgPartida.className = "centroGanar";
    text.innerText = "¡¡Ganaste!!";
    ganadas = ganadas + 1;
    jugadorPuntaje.innerText = "Jugador = " + ganadas;
  } else if (valor == 2 && pc == 1) {
    imgPartida.className = "centroGanar";
    text.innerText = "¡¡Ganaste!!";
    ganadas = ganadas + 1;
    jugadorPuntaje.innerText = "Jugador = " + ganadas;
  } else if (valor == 3 && pc == 2) {
    imgPartida.className = "centroGanar";
    text.innerText = "¡¡Ganaste!!";
    ganadas = ganadas + 1;
    jugadorPuntaje.innerText = "Jugador = " + ganadas;
  }

  // Perder
  else if (valor == 1 && pc == 2) {
    imgPartida.className = "centroPerder";
    text.innerText = "Perdiste...";
    perdidas++;
    pcPuntaje.innerText = "Pc = " + perdidas;
  } else if (valor == 2 && pc == 3) {
    imgPartida.className = "centroPerder";
    text.innerText = "Perdiste...";
    perdidas++;
    pcPuntaje.innerText = "Pc = " + perdidas;
  } else if (valor == 3 && pc == 1) {
    imgPartida.className = "centroPerder";
    text.innerText = "Perdiste...";
    perdidas++;
    pcPuntaje.innerText = "Pc = " + perdidas;
  }

  // Estado normal
  else {
    imgPartida.className = "centro";
    text.innerText = "";
  }
  console.log(ganadas);
  return ganadas;
}

function ModificarBtnPC(pc) {
  //
  if (pc == 1) {
    imgPiedra.className = "pcPiedra";
    imgPapel.className = "pcPapel";
    imgTijera.className = "pcTijera";
    imgPiedra.className = "pcSelectPiedra";
  } else if (pc == 2) {
    imgPiedra.className = "pcPiedra";
    imgPapel.className = "pcPapel";
    imgTijera.className = "pcTijera";
    imgPapel.className = "pcSelectPapel";
  } else if (pc == 3) {
    imgPiedra.className = "pcPiedra";
    imgPapel.className = "pcPapel";
    imgTijera.className = "pcTijera";
    imgTijera.className = "pcSelectTijera";
  } else {
    imgPiedra.className = "pcSelectPiedra";
  }
}
