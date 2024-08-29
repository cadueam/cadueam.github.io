var trocaNome = document.getElementById("troca-problema");
var trocaAno = document.getElementById("year");

trocaNome.addEventListener("mouseover", () => {
  trocaNome.innerText = `problemas`;
  trocaAno.innerText = `1995`;
});

trocaNome.addEventListener("mouseout", () => {
  trocaNome.innerText = `soluções`;
  trocaAno.innerText = `2016`;
});
