//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];

function adicionarAmigo() {
  let nome = document.querySelector("input").value;

  if (nome.length <= 0) {
    alert("Por Favor! Informe um nome válido.");
  } else {
    if (listaDeNomes.includes(nome)) {
      alert("Nome informado já incluso na lista de sorteio.");
    } else {
      listaDeNomes.push(nome);
      document.querySelector("input").value = "";
      listaAmigos();
    }
  }
}

function listaAmigos() {
  let ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  for (let index = 0; index < listaDeNomes.length; index++) {
    const nome = listaDeNomes[index];
    let li = document.createElement("li");

    li.innerText = nome;
    ul.appendChild(li);
  }
}

function sortearAmigo() {
  if (listaDeNomes.length > 0) {
    let buttonRealizarSorteio = document.getElementById("sorteio");
    let buttonNovoSorteio = document.getElementById("novoSorteio");
    let numeroSorteado = parseInt(Math.random() * listaDeNomes.length);
    let ulResultado = document.getElementById("resultado");
    let ulListaDeAmigos = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    ulResultado.innerHTML = "";
    ulListaDeAmigos.innerHTML = "";

    li.innerText = `O amigo secreto sorteado é: ${listaDeNomes[numeroSorteado]}`;
    ulResultado.appendChild(li);
    listaDeNomes = [];

    buttonRealizarSorteio.setAttribute("class", "button-hide");
    buttonNovoSorteio.setAttribute("class", "button-draw");
  } else {
    alert("Informe nomes válidos para realizar o sorteio");
  }
}

function novoSorteio() {
  let buttonRealizarSorteio = document.getElementById("sorteio");
  let buttonNovoSorteio = document.getElementById("novoSorteio");
  let ulResultado = document.getElementById("resultado");
  let ulListaDeAmigos = document.getElementById("listaAmigos");

  ulResultado.innerHTML = "";
  ulListaDeAmigos.innerHTML = "";
  listaDeNomes = [];

  buttonRealizarSorteio.setAttribute("class", "button-draw");
  buttonNovoSorteio.setAttribute("class", "button-hide");
}
