document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagemErro = document.getElementById('mensagemErro');

    // Validação de campos obrigatórios
    if (email === '' || senha === '') {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Usuários fixos
    const usuarios = [
        {
            perfil: "admin",
            email: "admin@fortes.com.br",
            senha: "123456",
            destino: "painel-admin.html"
        },
        {
            perfil: "cooperado",
            email: "cooperativas@fortes.com.br",
            senha: "123456",
            destino: "painel-cooperado.html"
        }
    ];

    // Verifica se usuário existe
    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuario) {
        // Redireciona para a página correta conforme perfil
        window.location.href = usuario.destino;
    } else {
        mensagemErro.textContent = "E-mail ou senha inválidos.";
    }
});