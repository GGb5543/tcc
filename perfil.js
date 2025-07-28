const usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario) {
  // Função para calcular idade
  function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  const idade = calcularIdade(usuario.nascimento);

  document.getElementById('nome').textContent = usuario.nome;
  document.getElementById('idade').textContent = idade + " anos";
  document.getElementById('genero').textContent = usuario.genero || "Não informado";
  document.getElementById('telefone').textContent = usuario.telefone;
  document.getElementById('email').textContent = usuario.email;
  document.getElementById('veiculo').textContent = usuario.modelo || "Não informado";
  document.getElementById('placa').textContent = usuario.placa;
} else {
  window.location.href = 'login.html';
}
