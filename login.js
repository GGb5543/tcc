document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePasswordButton = document.getElementById("toggle-password");

    togglePasswordButton.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePasswordButton.textContent = type === "password" ? "👁️" : "🙈";
    });
});

document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value; // Corrigido aqui também

    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
        window.location.href = 'tela de perfil.html';
    } else {
        alert('Email ou senha incorretos!');
    }
});
