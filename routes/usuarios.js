const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();


// Rota principal para o formulário de cadastro
router.get('/', (req, res) => {
    const title = "Página de Cadastro";
    res.render('cadastro', { title });
});

// Rota para criar um novo usuário
router.post('/usuarios', async (req, res) => {
    try {
        await Usuario.create({
            nome: req.body.nome,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            cep: req.body.cep,
            cidade: req.body.cidade,
            estado: req.body.estado,
            observacoes: req.body.observacoes
        });

        res.redirect('/usuarios');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar o registro');
    }
});

// Rota para listar todos os usuário
router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({ attributes: ['id', 'nome', 'endereco', 'bairro', 'cep', 'cidade', 'estado'] });
        res.render('listar', { registros: usuarios, title: 'Lista de Usuários' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erro ao buscar usuários. '});
    }
});

// Rota para excluir um usuário
router.get('/usuario/:id', async (req, res) => {
    try {
       const id = req.params.id;
       await Usuario.destroy({ where: { id: id }});
       res.redirect('/usuarios');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao excluir o registro');
    }
});

router.get('/usuario/editar/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findByPk(id);

        res.render('editar', { usuario, title: 'Editar Usuário' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao carregar o formulário de edição');
    }
});

router.post('/usuarios/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Usuario.update(req.body, { where: { id: id } });
        res.redirect('/usuarios');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao atualizar o usuário');
    }
});



module.exports = router;