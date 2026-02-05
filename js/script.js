alert("Hello World!");
console.log("primeiro print no console");

//exemplo de função
function falar() {
  alert("Olá! Eu sou um botão com Javascript");
  console.log("O botão foi clicado");
  console.log("Meu time me estressa toda semana");
}

//ligando botão com a função
const botao = document.getElementById("btnFala");
botao.addEventListener("click", falar);

const botao2 = document.getElementById("btnFala2");
botao2.addEventListener("click", falar);
