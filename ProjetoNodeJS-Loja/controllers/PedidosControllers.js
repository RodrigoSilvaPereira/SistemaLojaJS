import express from "express"
const router = express.Router()
import PedidoService from "../services/PedidoService.js"

// ROTA PEDIDOS
router.get("/pedidos", function(req, res){
    PedidoService.SelectAll().then((pedidos) =>{
        res.render("pedidos", {
            pedidos : pedidos
        })
    })
})

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req, res) => {
    PedidoService.Create(
        req.body.numero,
        req.body.valor
    )
    res.redirect("/pedidos")
})

// ROTA DE EXCLUSÃO DE PEDIDO
router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id
    PedidoService.Delete(id)
    res.redirect("/pedidos")
})

// ROTA DE EDIÇÃO DE PEDIDO
router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id
    PedidoService.SelectOne(id).then((pedido) => {
        res.render("pedidoEdit", {
            pedido : pedido
        })
    })
})

// ROTA DE ALTERAÇÃO DE PEDIDO
router.post("/pedidos/update/:id", (req, res) => {
    ClienteService.Update(
        req.body.id,
        req.body.numero,
        req.body.valor
    )
    res.redirect("/pedidos")
})

export default router

