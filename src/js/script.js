document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    console.log('Login:', login);
    console.log('Senha:', senha);

    if (login === 'usuário' && senha === '12345') {
        alert('Login realizado com sucesso!');
        // Substitua o URL abaixo pelo endereço da sua página principal
        window.location.href = "index.html"; // Exemplo: redirecionando para uma página principal
    } else {
        alert('Login ou senha incorretos, tente novamente.');
    }
});
