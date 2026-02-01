function actualizarHora() {
  const ahora = new Date();
  document.getElementById("hora").innerText =
    ahora.toLocaleTimeString();
}

setInterval(actualizarHora, 1000);
actualizarHora();
