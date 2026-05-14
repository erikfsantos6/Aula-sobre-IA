const express = require('express');
const cors = require('cors');
const {Sequelize,DataTypes} = require('sequelize');

// 1. CONFIGURANDO CONEXÃO COM O BANCO DE DADOS
const sequelize = new Sequelize('api', 'root', '', {
    host: 'Localhost',
    dialect: 'mysql'
});

// 2. DEFINIDO O MODELO DE DADOS
// COMO DEVE SER A TABELA NO BANCO DE DADOS
const Cliente = sequelize.define('cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/clients', async (req, res) => {
    try {
        const clientes = await Client.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar clientes'});
    }
});

app.post('/clients', async (req, res) => {
    const {nome,email,telefone} = req.body;
    try {
        const novoCliente = await Client.create({nome,email,telefone}   );
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({error: 'Erro ao criar cliente'});
    }
});

// 5. INICIANDO O SERVIDOR E SINCRONIZANDO COM O BANCO DE DADOS
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log('Banco de dados sincronizado com sucesso!');
    });
}).catch(error => {
    console.error('Erro ao conectar com o banco de dados:', error);
});