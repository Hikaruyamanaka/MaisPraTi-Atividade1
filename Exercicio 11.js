let soma = 0;

for (let i = 1; i <= 5; i++) {
  let num = parseFloat(prompt(`Digite o número ${i}:`));
  soma += num; // soma = soma + num
}

console.log("A soma total dos números é:", soma);
