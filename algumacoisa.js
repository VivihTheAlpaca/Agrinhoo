window.addEventListener("load", () => {
  const musica = document.getElementById("musica-divonica");
  // Toca com volume 0 e aumenta após 1s (dribla alguns bloqueios)
  musica.volume = 0;
  musica.play().then(() => {
    setTimeout(() => { musica.volume = 1; }, 1000);
  }).catch(() => {
    console.log("Autoplay bloqueado, tocando só quando clicar.");
  });
});