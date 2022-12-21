import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {criaPedido} from "./endpoints/criaPedido"
import {pegaPedido} from "./endpoints/pegaPedido"
import {pegaEstoque} from "./endpoints/pegaEstoque"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.post("/pedidos/:product_id", criaPedido);

app.get("/pedidos", pegaPedido);

app.get("/estoque", pegaEstoque);


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});