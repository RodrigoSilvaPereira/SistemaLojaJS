import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get("/", function (req, res) {
    res.render("index")
})

app.get("/clientes", function (req, res) {
    const clientes = [
        { "nome": "Arnold Schwarzenegger", "cpf": "001.002.003-00", "endereco": "123 Muscle Avenue, Venice Beach, CA, USA" },
        { "nome": "Ronnie Coleman", "cpf": "004.005.006-00", "endereco": "456 Beast Street, Arlington, TX, USA" },
        { "nome": "Serena Williams", "cpf": "007.008.009-00", "endereco": "789 Power Court, Palm Beach Gardens, FL, USA" },
        { "nome": "Dorian Yates", "cpf": "010.011.012-00", "endereco": "101 Dungeon Lane, Birmingham, UK" },
        { "nome": "Ronda Rousey", "cpf": "013.014.015-00", "endereco": "314 Submission Street, Venice, CA, USA" },
        { "nome": "Jay Cutler", "cpf": "016.017.018-00", "endereco": "517 Mass Avenue, Las Vegas, NV, USA" },
        { "nome": "Valeria Guznenkova", "cpf": "019.020.021-00", "endereco": "720 Strength Road, Moscow, Russia" },
        { "nome": "Kai Greene", "cpf": "022.023.024-00", "endereco": "923 Flex Avenue, Brooklyn, NY, USA" }
    ]
    res.render("clientes", {
        clientes: clientes
    })
})

app.get("/produtos", function (req, res) {
    const produtos = [
        { "nome": "Whey Protein Isolado", "preco": 120, "categoria": "Suplementos" },
        { "nome": "Multivitamínico para Atletas", "preco": 80, "categoria": "Suplementos" },
        { "nome": "BCAA em Pó", "preco": 50, "categoria": "Suplementos" },
        { "nome": "Creatina Monohidratada", "preco": 200, "categoria": "Suplementos" },
        { "nome": "Caseína Micelar", "preco": 150, "categoria": "Suplementos" },
        { "nome": "Pré-Treino Energético", "preco": 70, "categoria": "Suplementos" },
        { "nome": "Barra de Proteína", "preco": 3, "categoria": "Suplementos" },
        { "nome": "Glutamina em Pó", "preco": 40, "categoria": "Suplementos" }
    ]
    res.render("produtos", {
        produtos: produtos
    })

})

app.get("/pedidos", function (req, res) {
    const pedidos = [
        { "numero": "783429831", "valor": 120 },
        { "numero": "783429832", "valor": 80 },
        { "numero": "783429833", "valor": 50 },
        { "numero": "783429834", "valor": 200 },
        { "numero": "783429835", "valor": 150 },
        { "numero": "783429836", "valor": 70 },
        { "numero": "783429837", "valor": 3 },
        { "numero": "783429838", "valor": 40 }
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})

app.listen(3000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!")

    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})