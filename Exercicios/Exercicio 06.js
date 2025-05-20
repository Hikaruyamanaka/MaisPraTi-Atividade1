let a = parseFloat(prompt("Digite o lado A do triângulo:"));
let b = parseFloat(prompt("Digite o lado B do triângulo:"));
let c = parseFloat(prompt("Digite o lado C do triângulo:"));

// Verifica se os lados formam um triângulo
if (a < b + c && b < a + c && c < a + b) {
  // Verifica o tipo de triângulo
  if (a === b && b === c) {
    console.log("Triângulo Equilátero (todos os lados iguais)");
  } else if (a === b || a === c || b === c) {
    console.log("Triângulo Isósceles (dois lados iguais)");
  } else {
    console.log("Triângulo Escaleno (todos os lados diferentes)");
  }
} else {
  console.log("Os valores fornecidos NÃO formam um triângulo.");
}
