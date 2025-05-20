let nota = prompt("Insira a nota (0 a 10):");

nota = parseFloat(nota); // converte para número decimal

if (nota >= 7 && nota <= 10) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else if (nota >= 0 && nota < 5) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida");
}
