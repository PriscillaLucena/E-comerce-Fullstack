import express from "express";
import { EstoqueController } from "../Controller/EstoqueController";

export const estoqueRouter = express.Router();

const estoqueController = new EstoqueController();

estoqueRouter.get("/", estoqueController.pegaEstoque);