var pontosQuiz = 0;
var qntdperguntas;
var userPoints = {
    quizId:3,
    usuario: sessionStorage.getItem("ID_USUARIO"),
    pontosQuiz: 0,
    qntdAcertos: 0,
    finalizouQuiz:false
}
var perguntas = document.querySelectorAll(".pergunta")
var painelResultado = document.querySelector(".resultPanel")
var painelRank = document.querySelector(".panelRank")
function mostrarPanel() {

    painelResultado.style = " display:flex; "
    showPoints.innerHTML = `Você Acertou <div id="pointBarra">${userPoints.qntdAcertos}</div>/${perguntas.length}`
    if (userPoints.pontosQuiz <= 200) {
        gifResult.src = "https://media4.giphy.com/media/AdpkljsgqWlXi/giphy.gif?cid=ecf05e473iqb8fk6lupfh0f0v5kq9zo9wlfo16oqsdz9buq5&rid=giphy.gif&ct=g"
        showResult.innerHTML = "Você foi mal tente refazer"
        showResult.style = "Color:red;"
    } else if ( userPoints.pontosQuiz >= 400 &&userPoints.pontosQuiz <= 500 ) {
        gifResult.src = "https://media2.giphy.com/media/l41K2dG6bwSVx6U7K/giphy.gif?cid=ecf05e47hi85b4bihmbxdemf6alhoudcsy5k3is2yzqqihx5&rid=giphy.gif&ct=g"
        showResult.innerHTML = "Você quase acertou todos!!!"
        showResult.style = "Color:yellow;"
    } else if (userPoints.pontosQuiz = 600) {
        gifResult.src = "https://media2.giphy.com/media/fmd46gcrNQJePMU6xa/200w.webp?cid=ecf05e47cz0cs8hcnjko13mw05jbti5bdlgndagiqaon2nfx&rid=200w.webp&ct=g"
        showResult.innerHTML = "Alguem pare esse trem"
        showResult.style = "Color:green;"
    }
    painelRank.style = "display:flex;"
    //     console.log(rank)

    // console.log("Tamanho array;",rank.length)
    //    for(var i = 0; i <= rank.length; i++){
    //     showRank.innerHTML+=`${i}  ${rank[i].nome} `
    //    }
    
}

function questao01() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion1")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;

        } else {
            console.log("Selecione alguma das opçoes")
        }
        
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[0].style = "display:none;"
        perguntas[1].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}
function questao02() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion2")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;

        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[1].style = "display:none;"
        perguntas[2].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}

function questao03() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion3")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;

        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[2].style = "display:none;"
        perguntas[3].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}

function questao04() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion4")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;
        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[3].style = "display:none;"
        perguntas[4].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}
function questao05() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion5")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;
        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        perguntas[4].style = "display:none;"
        perguntas[5].style = "display:flex;"
    }
    console.log(userPoints.pontosQuiz)
}


async function listarRankingQuiz1() {
    var quiz = 3;
    const response = await fetch(`http://localhost:3333/quizzes/listarRankingQuiz1`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }, body: JSON.stringify({ quiz }) 
    })
    console.log(response)
    console.log(response)
    console.log("Estou no then")
    var ranking = await response.json()
    console.log(ranking);
    
    for(var i = 0; i <= ranking.length; i++){
        
        for(var i = 0; i < ranking.length ; i++){
            tableRank.innerHTML+=`<tr><td>${i +1}</td> <td>${ranking[i].nome}</td> <td>${ranking[i].pontos}</td></tr> `
           }
    }
    
    if (response.ok) {
        // window.location = "/user/perfil.html"
             console.log("PEGUEI OS VALORES")

    } else if (response.status == 404) {
        console.log("Deu 404!");
    } else {
        throw ("Houve um erro ao tentar realizar adicionar a bio! Código da response: " + response.status);
    }

}

async function inserirPontos(){
   var usuario = userPoints;
   const options = {
       method: "PUT",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({ usuario })
   }
   const response = await fetch(`http://localhost:3333/quizzes/insertPoints`,
       options
   )
   if (response.ok) {
       console.log("Pontos Enviados com sucesso" + sessionStorage.getItem("EMAIL_USUARIO") + "!");
       
   } else if (response.status == 404) {
       window.alert("Deu 404!");
   } else {
       throw ("Houve um erro ao adicionar os pontos" + response.status);
   }
}


function questaoFinal() {
    var checkIfIsSelected = 0
    var respostas01 = document.querySelectorAll(".optionsQuestion6")
    for (var i = 0; i < + respostas01.length; i++) {
        if (respostas01[i].checked == true && respostas01[i].value > 0) {
            console.log("acertou")
            userPoints.qntdAcertos ++;
            userPoints.pontosQuiz += Number(respostas01[i].value);
        } else if (respostas01[i].checked == false) {
            checkIfIsSelected++;
        } else {
            console.log("Selecione alguma das opçoes")
        }
    }
    if (checkIfIsSelected == 4) {
        alert("Selecione um dos campos")
    } else {
        lastBTN.style = `display:none;`
        inserirPontos();
        setTimeout(()=>{
            listarRankingQuiz1();
        perguntas[5].style = "display:none;"
        mostrarPanel();
        },3000)
        
        // for(var i =0; i <= rank.length;i++){
        //     showRank.innerHTML += ` ranks ${rank[i]}`
        // }
    }
    console.log(userPoints.pontosQuiz)
}