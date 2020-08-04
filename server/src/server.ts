import express from 'express';
import cors from 'cors';

import routes from './routes';

// GET: buscar ou listar uma informacao,
// POST: criar alguma nova informacao,
// PUT: Atualizar uma informacao existente,
// Delete: deletar uma informacao existente.

// Corpo (Request Body): dados para criacao ou atualizacao de um registro
// Route Params: identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginacao, filtros, ordenacao

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);