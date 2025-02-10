document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let confirmEmail = document.getElementById("confirmEmail").value.trim();
    let senha = document.getElementById("senha").value;
    let nascimento = document.getElementById("nascimento").value;
    let termos = document.getElementById("termos").checked;
    
    let isValid = true;

    // Limpa mensagens de erro anteriores
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    if (nome === "") {
        document.getElementById("nomeErro").textContent = "Nome é obrigatório.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailErro").textContent = "E-mail é obrigatório.";
        isValid = false;
    }

    if (confirmEmail === "" || confirmEmail !== email) {
        document.getElementById("confirmEmailErro").textContent = "Os e-mails não coincidem.";
        isValid = false;
    }

    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[0-9]/.test(senha)) {
        document.getElementById("senhaErro").textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.";
        isValid = false;
    }

    if (nascimento === "") {
        document.getElementById("nascimentoErro").textContent = "Data de nascimento é obrigatória.";
        isValid = false;
    }

    if (!termos) {
        document.getElementById("termosErro").textContent = "Você deve aceitar os termos.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("mensagemSucesso").style.display = "block";
        setTimeout(() => document.getElementById("mensagemSucesso").style.display = "none", 3000);
        document.getElementById("cadastroForm").reset();
    }
});
