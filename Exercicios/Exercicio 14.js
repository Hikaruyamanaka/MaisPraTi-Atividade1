let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));

let fatorial = 1;

if (numero < 0) {
  console.log("Fatorial não definido para números negativos.");
} else {
  for (let i = 1; i <= numero; i++) {
    fatorial *= i; // fatorial = fatorial * i
  }
  console.log(`O fatorial de ${numero} é ${fatorial}.`);
}
