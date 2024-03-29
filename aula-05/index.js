require('dotenv').config()

const express = require('express');
const routes = require('./src/router')

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use('/',routes)

app.listen(PORT, () => {
    console.log('Aplicação rodando na porta 3000');
  });