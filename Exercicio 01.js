let numero = prompt("Insira um número inteiro:");

numero = parseInt(numero); // converte o valor digitado para número inteiro

if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
