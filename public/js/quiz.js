var userPoints = {
    quizId: 1,
    usuario: sessionStorage.getItem("ID_USUARIO"),
    pontosQuiz: 0,
    qntdAcertos: 0,
    finalizouQuiz: false
};

var perguntas = document.querySelectorAll(".pergunta");
var painelResultado = document.querySelector(".resultPanel");
var painelRank = document.querySelector(".panelRank");

function mostrarPanel() {
    painelResultado.style.display = "flex";
    showPoints.innerHTML = `Você Acertou <div id="pointBarra">${userPoints.qntdAcertos}</div>/${perguntas.length}`;
    if (userPoints.pontosQuiz <= 200) {
        gifResult.src = "https://media4.giphy.com/media/AdpkljsgqWlXi/giphy.gif?cid=ecf05e473iqb8fk6lupfh0f0v5kq9zo9wlfo16oqsdz9buq5&rid=giphy.gif&ct=g";
        showResult.innerHTML = "Você foi mal, tente refazer";
        showResult.style.color = "red";
    } else if (userPoints.pontosQuiz >= 400 && userPoints.pontosQuiz <= 500) {
        gifResult.src = "https://media2.giphy.com/media/l41K2dG6bwSVx6U7K/giphy.gif?cid=ecf05e47hi85b4bihmbxdemf6alhoudcsy5k3is2yzqqihx5&rid=giphy.gif&ct=g";
        showResult.innerHTML = "Você quase acertou todos!!!";
        showResult.style.color = "yellow";
    } else if (userPoints.pontosQuiz === 600) {
        gifResult.src = "https://media2.giphy.com/media/fmd46gcrNQJePMU6xa/200w.webp?cid=ecf05e47cz0cs8hcnjko13mw05jbti5bdlgndagiqaon2nfx&rid=200w.webp&ct=g";
        showResult.innerHTML = "Alguém pare esse trem";
        showResult.style.color = "green";
    }
    painelRank.style.display = "flex";
}

function processarRespostas(respostasClassName) {
    var checkIfIsSelected = 0;
    var respostas = document.querySelectorAll(respostasClassName);
    for (var i = 0; i < respostas.length; i++) {
        if (respostas[i].checked && respostas[i].value > 0) {
            console.log("acertou");
            userPoints.qntdAcertos++;
            userPoints.pontosQuiz += Number(respostas[i].value);
        } else if (!respostas[i].checked) {
            checkIfIsSelected++;
        } else {
            console.log("Selecione alguma das opções");
        }
    }
    if (checkIfIsSelected === 4) {
        alert("Selecione um dos campos");
    } else {
        return true; // Todas as respostas estão selecionadas
    }
}

function avancarPerguntas(perguntaAtual, proximaPergunta) {
    if (processarRespostas(perguntaAtual)) {
        perguntas[perguntaAtual].style.display = "none";
        perguntas[proximaPergunta].style.display = "flex";
    }
}

function questaoFinal() {
    if (processarRespostas(".optionsQuestion6")) {
        lastBTN.style.display = "none";
        inserirPontos();
        setTimeout(() => {
            listarRankingQuiz1();
            perguntas[5].style.display = "none";
            mostrarPanel();
        }, 3000);
    }
}
