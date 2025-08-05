// Evento de clique no botão para mostrar uma mensagem
document.getElementById("btnSaudacao").addEventListener("click", function () {
  const mensagem = document.getElementById("mensagemSaudacao");
  mensagem.textContent = "Olá! Que bom ver você aqui. 😄";
});

// Alternar entre modo claro e escuro ao clicar no botão
document.getElementById("alternarTema").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


// Contador simples com botões de incrementar e decrementar
// Inicializa o contador
let contador = 0;

document.getElementById("btnMais").addEventListener("click", function () {
  contador++;
  atualizarContador();
});

document.getElementById("btnMenos").addEventListener("click", function () {
  contador--;
  atualizarContador();
});

function atualizarContador() {
  document.getElementById("valorContador").textContent = contador;
}

// Validação de formulário simples
document.getElementById("formularioCadastro").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede envio automático

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  const feedback = document.getElementById("feedbackForm");

  // Validação de nome
  if (nome.length < 2) {
    feedback.textContent = "O nome deve ter pelo menos 2 caracteres.";
    feedback.style.color = "red";
    return;
  }

  // Validação de email usando regex simples
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    feedback.textContent = "Insira um email válido.";
    feedback.style.color = "red";
    return;
  }

  // Validação de senha
  if (senha.length < 6) {
    feedback.textContent = "A senha deve conter pelo menos 6 caracteres.";
    feedback.style.color = "red";
    return;
  }

  // Se tudo estiver ok
  feedback.textContent = "Cadastro realizado com sucesso!";
  feedback.style.color = "green";
});