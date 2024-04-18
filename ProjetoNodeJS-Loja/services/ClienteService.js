import mongoose from "mongoose"
import cliente from "../models/Cliente.js"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService {
    //SELECIONAR TODOS os Clientes no banco
    SelectAll() {
        const clientes = Cliente.find()
        return clientes
    }

    //CADASTRAR um Cliente
    Create(nome, cpf, endereco) {
        const novoCliente = new Cliente({
            nome : nome,
            cpf : cpf,
            endereco : endereco
        })
        novoCliente.save()
    }

    //EXCLUIR um Cliente
    Delete(id) {
        Cliente.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id: ${id} foi deletado com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }

    //SELECIONAR
    SelectOne(id){
        const cliente = Cliente.findOne({_id : id})
        return cliente
    }

    //ALTERAR
    Update(id, nome, cpf, endereco) {
        Cliente.findByIdAndUpdate(id, {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        }).then(() => {
            console.log(`Dados do cliente com id: ${id} alterados com sucesso!`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new ClienteService()