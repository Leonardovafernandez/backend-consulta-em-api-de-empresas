const express = require('express');
const pesquisarEmpresa = require('./controladores/abstract');

const rotas = express();

rotas.get('/empresas/:dominioEmpresa', pesquisarEmpresa);

module.exports = rotas;