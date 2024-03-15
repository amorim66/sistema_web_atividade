const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemadb', 'root', 'alunofatec', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
});

// Teste

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso. ');
    })
    .catch(err => {
        console.error('Erro ao conectar-se ao banco de dados:', err);
    });

module.exports = sequelize;