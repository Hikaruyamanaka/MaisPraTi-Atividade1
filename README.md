# MaisPraTi-Atividade1

<br>

# Como Executar Exercícios JavaScript Localmente no VS Code

Este repositório contém exercícios em JavaScript para prática.

## Requisitos

- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- Navegador moderno (Chrome, Firefox, Edge, etc.)
- (Opcional) Extensão **Live Server** para VS Code

## Passos para executar

1. **Clone ou baixe** este repositório para seu computador.

2. **Abra a pasta** do projeto no VS Code:
   - Vá em `File > Open Folder` e selecione a pasta do projeto.

3. **Crie ou abra** um arquivo HTML, por exemplo, `index.html`, com a seguinte estrutura básica:

   ```html
   <!DOCTYPE html>
   <html lang="pt-BR">
   <head>
     <meta charset="UTF-8" />
     <title>Exercício JavaScript</title>
   </head>
   <body>
     <h1>Teste de JavaScript</h1>
     <script>
       // Cole aqui seu código JavaScript para testar
       let numero = prompt("Digite um número inteiro:");
       if (numero % 2 === 0) {
         alert("O número é par");
       } else {
         alert("O número é ímpar");
       }
     </script>
   </body>
   </html>

4. **Abra o arquivo HTML no navegador:**

   - Usando Live Server (recomendado):

     - Instale a extensão Live Server no VS Code (ícone de extensões na barra lateral).

     - Clique com o botão direito no arquivo index.html e escolha Open with Live Server.

     - O navegador abrirá a página automaticamente.

   - Sem Live Server:

     - Navegue até o arquivo index.html na pasta do projeto.

     - Dê um duplo clique para abrir no navegador.

5. **Interaja com o programa:**

   - Quando o prompt aparecer, digite os valores solicitados.

   - Veja as respostas em alert ou no console do navegador (pressione F12 para abrir o console).

