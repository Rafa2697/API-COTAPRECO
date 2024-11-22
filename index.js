import express from 'express'
import connectDatabase from './src/database/index.js'
import routes from './src/routes.js'

const app = express()

app.use(express.json())
app.use(routes)


connectDatabase()
    .then(() =>{
        app.listen(3000, function () {
            console.log('servidor rodando e banco de dados conectado')
        })
    } )
    .catch((error) => console.error(error));

