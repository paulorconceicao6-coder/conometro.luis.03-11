"use strict";

const tempo = document.querySelector("#tempo");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const zerar = document.querySelector("#zerar");

let segundos = 0;
let intervalo = null;

if (tempo && iniciar && pausar && zerar) {
  iniciar.addEventListener("click", iniciarTempo);
  pausar.addEventListener("click", pausarTempo);
  zerar.addEventListener("click", zerarTempo);
}

function iniciarTempo() {
  if (intervalo === null) {
    intervalo = setInterval(atualizarTempo, 1000);
  }
}

function atualizarTempo() {
  segundos++;
  const minutos = String(Math.floor(segundos / 60)).padStart(2, "0");
  const resto = String(segundos % 60).padStart(2, "0");
  tempo.textContent = `${minutos}:${resto}`;
}

function pausarTempo() {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
  }
}

function zerarTempo() {
  pausarTempo();
  segundos = 0;
  tempo.textContent = "00:00";
}
