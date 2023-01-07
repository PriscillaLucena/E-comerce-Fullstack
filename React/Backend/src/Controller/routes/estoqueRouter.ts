import express from "express";
import { EstoqueController } from "../EstoqueController";

export const estoqueRouter = express.Router();

const estoqueController = new EstoqueController();

estoqueRouter.get("/", estoqueController.pegaEstoque);