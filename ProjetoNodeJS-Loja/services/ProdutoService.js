import mongoose from "mongoose"
import produto from "../models/Produto.js"

const Produto = mongoose.model("Produto", produto)

class ProdutoService {
    // Método para SELECIONAR TODOS os Produtos no banco
    SelectAll() {
        const produtos = Produto.find()
        return produtos
    }

    //CADASTRAR um PRODUTO
    Create(nome, preco, categoria) {
        const novoProduto = new Produto({
            nome: nome,
            preco: preco,
            categoria: categoria
        })
        novoProduto.save()
    }

    //EXCLUIR um PRODUTO
    Delete(id) {
        Produto.findByIdAndDelete(id).then(() => {
            console.log(`Produto com a id: ${id} foi deletado com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }

    //SELECIONAR
    SelectOne(id) {
        const produto = Produto.findOne({ _id: id })
        return produto
    }

    //ALTERAR
    Update(id, nome, preco, categoria) {
        Produto.findByIdAndUpdate(id, {
            nome: nome,
            preco: preco,
            categoria: categoria
        }).then(() => {
            console.log(`Dados do produto com id: ${id} alterados com sucesso!`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new ProdutoService()