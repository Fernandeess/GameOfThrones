var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.post("/listar", function (req, res) {
    console.log("Passei pela rota listar")
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
//Area de teste
router.put("/adicionarBio/:idUsuario", function (req, res) {

    usuarioController.adicionarBio(req, res)
})
router.put("/adicionarIMG/:idUsuario", function (req, res) {
    console.log("Editar Imagens ROUTER")
    usuarioController.adicionarIMG(req, res)
})
router.post("/listarUsuariosCasa", function (req, res) {
    console.log("valores Casas Router")
    usuarioController.listarUsuariosCasa(req, res)
})
///
module.exports = router;