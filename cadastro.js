document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");
  const diaSelect = document.getElementById("diaNascimento");
  const anoSelect = document.getElementById("anoNascimento");
  const anoAtual = new Date().getFullYear();
  const mensagemErro = document.getElementById("mensagemErro");

  // Preenche dias
  for (let d = 1; d <= 31; d++) {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    diaSelect.appendChild(option);
  }

  // Preenche anos
  for (let a = anoAtual; a >= anoAtual - 100; a--) {
    const option = document.createElement("option");
    option.value = a;
    option.textContent = a;
    anoSelect.appendChild(option);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const dia = document.getElementById("diaNascimento").value;
    const mes = document.getElementById("mesNascimento").value;
    const ano = document.getElementById("anoNascimento").value;
    const genero = document.getElementById("genero").value;
    const modelo = document.getElementById("modeloVeiculo").value;
    const placa = document.getElementById("placaVeiculo").value.trim().toUpperCase();

    // Validações
    if (senha !== confirmarSenha) {
      mensagemErro.textContent = "As senhas não coincidem.";
      mensagemErro.style.color = "red";
      return;
    }

    if (!dia || !mes || !ano) {
      mensagemErro.textContent = "Por favor, selecione a data de nascimento completa.";
      mensagemErro.style.color = "red";
      return;
    }

    const placaRegex = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;
    if (!placaRegex.test(placa)) {
      mensagemErro.textContent = "Formato de placa inválido. Use padrão ABC1D23 ou similar.";
      mensagemErro.style.color = "red";
      return;
    }

    // Formata nascimento
    const nascimento = `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;

    const dadosUsuario = {
      nome,
      email,
      telefone,
      senha,
      nascimento,
      genero,
      modelo,
      placa,
    };

    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));

    // Exibe mensagem de sucesso e redireciona após 2 segundos
    mensagemErro.textContent = "Cadastro realizado com sucesso!";
    mensagemErro.style.color = "green";

    setTimeout(() => {
      window.location.href = "perfil.html";
    }, 2000);
  });
});
