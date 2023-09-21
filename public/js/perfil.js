async function listar() {
    try {
        var idUser = sessionStorage.getItem("ID_USUARIO");
        const response = await fetch(`http://localhost:3333/usuarios/listar`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ idUser })
        });
        if (response.ok) {
            var perfil = await response.json();
            if (perfil && perfil.length > 0) {
                var userPerfil = perfil[0];
                console.log(userPerfil.bio);
                console.log(userPerfil.imgPerfil, " Imagem Link");
                sessionStorage.BIO_USUARIO = userPerfil.bio;
                sessionStorage.IMG_PERFIL = userPerfil.imgPerfil;
                console.log("Atualizou o id e o bio");
            }
        } else if (response.status === 404) {
            console.log("Deu 404!");
        } else {
            throw new Error("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

var inptBio = document.querySelector("#inpBio");

async function enviarFormulario() {
    try {
        const idPerfil = sessionStorage.getItem("ID_USUARIO");
        const bio = inptBio.value;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ bio })
        };
        const response = await fetch(`/usuarios/adicionarBio/${idPerfil}`, options);
        if (response.ok) {
            window.alert("Bio atualizada com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            await listar();
        } else if (response.status === 404) {
            window.alert("Deu 404!");
        } else {
            throw new Error("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

var inptIMG;
var btnIMG = document.querySelector(".btnEnviarImg"); // Removi o ponto antes da classe
function checkIMG() {
    inptIMG = document.querySelector("#inpImg");
    if (inptIMG.value !== "") {
        perfilImg.src = inptIMG.value;
    }
}

async function enviarFormularioIMG() {
    try {
        perfilImg.style = `display:flex;`;
        const idPerfil = sessionStorage.getItem("ID_USUARIO");
        const img = inptIMG.value;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ img })
        };
        const response = await fetch(`/usuarios/adicionarIMG/${idPerfil}`, options);
        if (response.ok) {
            window.alert("IMG atualizada com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            await listar();
        } else if (response.status === 404) {
            window.alert("Deu 404!");
        } else {
            throw new Error("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

const sairBTN = document.querySelector("#btnSair");

function sair() {
    window.location = "/user/perfil.html";
}
