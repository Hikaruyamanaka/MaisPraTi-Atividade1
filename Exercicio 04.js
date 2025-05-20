let opcao = prompt(
  "Escolha uma opção:\n1 - Dizer Olá\n2 - Mostrar Data Atual\n3 - Sair"
);

switch (opcao) {
  case "1":
    console.log("Olá! Seja bem-vindo!");
    break;
  case "2":
    let dataAtual = new Date();
    console.log("Data atual:", dataAtual.toLocaleDateString());
    break;
  case "3":
    console.log("Encerrando o programa...");
    break;
  default:
    console.log("Opção inválida.");
    break;
}
