const form = document.querySelector("#formMensagem");
const input = document.querySelector("#mensagem");
const erro = document.querySelector("#erro");
const lista = document.querySelector("#lista");

//"Banco de dados" em memória (array)
let mensagens = [];

function validarTexto(texto) {
  const txt = texto.trim();

  if (txt === "") {
    return "Digite algo antes de enviar";
  }

  if (txt.length < 3) {
    return "Mínimo de 3 caracteres";
  }

  return "";
}

//Renderizando/mostrando a lista na tela
function render() {
  lista.innerHTML = "";

  //<li> para cada mensagem
  for (const msg of mensagens) {
    const li = document.createElement("li");
    li.textContent = msg;
    lista.append(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const textoDigitado = input.value;
  const mensagemErro = validarTexto(textoDigitado);

  if (mensagemErro !== "") {
    erro.textContent = mensagemErro;
    return;
  }

  mensagens.push(textoDigitado.trim());
  render();

  input.value = "";
  input.focus();
});

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
