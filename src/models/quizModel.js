var database = require("../database/config")

function listarRankingQuiz1(idQuiz) {
    console.log("Passei no model do listar e o id e " + idQuiz)
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `SELECT nome, max(pontos) as pontos FROM Usuario JOIN Pontos ON idUsuario = fkUsuario WHERE fkQuiz = ${idQuiz} group by nome order by pontos desc;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function insertPoints(idQuiz, idUsuario,quizPoints) {
    console.log("Passei no model do listar e o id e " + idQuiz)
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `INSERT INTO Pontos(fkUsuario,fkQuiz,pontos) VALUES (${idUsuario},${idQuiz},${quizPoints})`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listarRankingQuiz1,
    insertPoints
};