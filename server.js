//importar o express
import express from "express"
const PORT = 3333

const app = express()

//Parte 1 / roteamento - GET, POST, PUT E DELETE
//Parte 2 /  Roteamento - Receber informações
/** Formas de receber informações
 *1 - QUERY PARAMS -> GET ->/users?nome=Kleiton$cargo=aluno
 *2 - ROUTE PARAMS -> GET, PUT, DELETE -> /users/1
 *3 - BODY PARAMS -> POST -> /users = {JSON}
 */

 //1 - QUERY PARAMS
app.get('/users', (request, response) => {
    // console.log(request.query)
    const {nome, cargo, idade} = request.query
    // const nome = request.query.nome
    // const cargo = request.query.cargo
    // const idade = request.query.idade
    response.status(200).json({nome, cargo, idade})
        
})

app.post('/users', (request, response) => {
    response.status(201).json([
        'Usuario 01',
        'Usuario 02',
        'Usuario 03',
        'Usuario 04',

    ])
})
//Parte 2 /  Roteamento - Receber informações
app.put('/users/:id/:idade', (request, response) => {
    const {id, idade} = request.params
    response.status(200).json({"users": id, "idade": idade})
})
app.delete('/users', (request, response) => {
    response.status(200).json([
        'Usuario 10',
        'Usuario 03',
        'Usuario 04',
    ])
})

app.listen(PORT, () => {
    console.log("Servidor on PORT" + PORT)
})