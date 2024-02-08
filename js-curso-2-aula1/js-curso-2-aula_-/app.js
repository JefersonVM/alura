let listaDeNumerosSorteados = [];

const gerarNumeroAleatorio = (max) => {
  let numeroEscolhido = Math.floor(Math.random() * max) + 1;
  let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

  if (quantidadeDeNumerosSorteados === max) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio(max);
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
};

let numeroSecreto = gerarNumeroAleatorio(100);
let tentativas = 1;

const exibirTextoNaTela = (tag, texto) => {
  document.querySelector(tag).innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
};

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100");

const verificarChute = () => {
  const chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela(
      "p",
      `Parabéns, você descobriu o número secreto em ${tentativas} ${
        tentativas > 1 ? "tentativas" : "tentativa"
      }!`
    );
    exibirTextoNaTela("h1", "Fim de jogo");
    document.getElementById("reiniciar").disabled = false;
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
  } else {
    exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
  }

  document.querySelector("input").value = "";
  tentativas++;
};

const reiniciarJogo = () => {
  numeroSecreto = gerarNumeroAleatorio(100);
  tentativas = 1;
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
  document.getElementById("reiniciar").disabled = true;
};
