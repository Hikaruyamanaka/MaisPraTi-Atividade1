let quantidade = parseInt(prompt("Quantas maçãs você quer comprar?"));
let preco;

if (quantidade < 12) {
  preco = 0.30;
} else {
  preco = 0.25;
}

let total = quantidade * preco;

console.log("Valor total da compra: R$ " + total.toFixed(2));
