const botao = document.getElementById("botao-ola");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Olá, mundo! 👋 Seu site está funcionando.";
});
