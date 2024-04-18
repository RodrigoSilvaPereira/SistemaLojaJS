import express from "express" 

const app = express() 

import mongoose from "mongoose"

import ClientesController from "./controllers/ClientesControllers.js"
import PedidosController from "./controllers/PedidosControllers.js"
import ProdutosController from "./controllers/ProdutosControllers.js"

app.use(express.urlencoded({extended: false}))
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/loja2")


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)

app.get("/",function(req,res){
    res.render("index")
})

app.listen(3000,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})