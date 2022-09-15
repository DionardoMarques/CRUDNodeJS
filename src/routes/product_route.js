const express = require("express");
const router = express.Router();

const controller = require("../controllers/product_controller");

// Encaminhando a partir de /api/produtos

// Retornando todos os produtos cadastrados
router.get("/", controller.listar);

// Retornando um produto específico por ID
router.get("/:id", controller.buscarPorId);

// Cadastrando novos produtos
router.post("/", controller.cadastrar);

// Alterando um produto específico via ID
router.put("/:id", controller.alterar);

// Deletando um produto específico
router.delete("/:id", controller.deletar);

module.exports = router;
