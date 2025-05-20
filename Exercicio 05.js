let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros (ex: 1.75):");

peso = parseFloat(peso);
altura = parseFloat(altura);

let imc = peso / (altura * altura);

console.log("Seu IMC é:", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Categoria: Sobrepeso");
} else {
  console.log("Categoria: Obesidade");
}
