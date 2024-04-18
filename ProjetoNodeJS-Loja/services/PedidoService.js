import mongoose from "mongoose"
import pedido from "../models/Pedido.js"

const Pedido = mongoose.model("Pedido", pedido)

class PedidoService {
    // Método para SELECIONAR TODOS os Pedidos no banco
    SelectAll() {
        const pedidos = Pedido.find()
        return pedidos
    }

    //CADASTRAR
    Create(numero, valor) {
        const novoPedido = new Pedido({
            numero : numero,
            valor : valor
        })
        novoPedido.save()
    }

    //EXCLUIR
    Delete(id) {
        Pedido.findByIdAndDelete(id).then(() => {
            console.log(`Pedido com a id: ${id} foi deletado com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }

    //SELECIONAR
    SelectOne(id){
        const pedido = Pedido.findOne({_id : id})
        return pedido
    }

    //ALTERAR
    Update(id, numero, valor) {
        Pedido.findByIdAndUpdate(id, {
            numero : numero,
            valor : valor,
        }).then(() => {
            console.log(`Dados do pedido com id: ${id} alterados com sucesso!`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new PedidoService()