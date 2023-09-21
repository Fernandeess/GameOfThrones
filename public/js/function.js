// sessãologin.html

function validarSessao() {
    const email = sessionStorage.getItem("EMAIL_USUARIO");
    const nome = sessionStorage.getItem("NOME_USUARIO");

    if (email && nome) {
        // Sessão válida
        // console.log("validado")
    } else {
        // Redireciona para a página inicial após 1 segundo
        setTimeout(() => window.location.href = "../index.html", 1000);
        // console.log("vaza")
    }
}

function limparSessao() {
    // Limpa a sessão
    sessionStorage.clear();
    // Redireciona para a página inicial
    window.location.href = "../index.html";
}

function limparErros() {
    const divAguardar = document.getElementById("div_aguardar");
    const divErrosLogin = document.getElementById("div_erros_login");

    // Esconde as divs de aguardar e erros
    divAguardar.style.display = "none";
    divErrosLogin.style.display = "none";

    // console.log("fechar loading")
}

// Modal (seção de código está faltando)
