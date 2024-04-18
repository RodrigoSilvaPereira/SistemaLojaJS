import express from "express"
const router = express.Router()
import ProdutoService from "../services/ProdutoService.js"

// ROTA PRODUTOS
router.get("/produtos", function(req, res){
    ProdutoService.SelectAll().then((produtos) =>{
        res.render("produtos", {
            produtos : produtos
        })
    })
})

// ROTA DE CADASTRO DE PRODUTOS
router.post("/produtos/new", (req, res) => {
    ProdutoService.Create(
        req.body.nome,
        req.body.preco,
        req.body.categoria
    )
    res.redirect("/produtos")
})

// ROTA DE EXCLUSÃO DE PRODUTO
router.get("/produtos/delete/:id", (req, res) => {
    const id = req.params.id
    ProdutoService.Delete(id)
    res.redirect("/produtos")
})

// ROTA DE EDIÇÃO DE PRODUTO
router.get("/produtos/edit/:id", (req, res) => {
    const id = req.params.id
    ProdutoService.SelectOne(id).then((produto) => {
        res.render("produtoEdit", {
            produto : produto
        })
    })
})

// ROTA DE ALTERAÇÃO DE PRODUTO
router.post("/produtos/update/:id", (req, res) => {
    ProdutoService.Update(
        req.body.id,
        req.body.nome,
        req.body.preco,
        req.body.categoria
    )
    res.redirect("/produtos")
})

export default router