const express = require('express');
const exphbr = require('express-handlebars');
const path = require('path');
const app = express();
const usuarioRoutes = require('./routes/usuarios');
const sequelize = require('./sequelize');

// Configuração do Handlebars
app.engine('handlebars', exphbr.engine({defaultLayout: 'main', runtimeOptions:{allowProtoPropertiesByDefault:true,
    allowedProtoMethodsByDefault:true}}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração Sequelize
sequelize.sync({ force: false })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar tabelas:', err);
    });

// Middleware
app.use(express.json());
app.use(express.urlencoded( { extended: false }));

// Rotas
app.use(usuarioRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
