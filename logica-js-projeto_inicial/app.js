alert("Boas vindas ao jogo do número secreto!");

let quantidadeDeNumeros = 200;

let numeroSecreto = parseInt(Math.random() * quantidadeDeNumeros) + 1;

let numeroEscolhido;
let tentativas = 1;

while (numeroEscolhido != numeroSecreto) {
  numeroEscolhido = parseInt(
    prompt(`Digite um número entre 0 e ${quantidadeDeNumeros}:`)
  );

  if (numeroEscolhido == numeroSecreto) {
    break;
  } else {
    if (numeroEscolhido > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroEscolhido}!`);
    } else {
      alert(`O número secreto é maior que ${numeroEscolhido}!`);
    }
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Isso mesmo! O número secreto é ${numeroSecreto}! Você acertou em ${tentativas} ${palavraTentativa}!`
);
