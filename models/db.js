const { Sequelize } = require('sequelize');


//Conexão com o banquinho de dados
//O BANCO DE DADOS SE CHAMA "TESTE"
//USUÁRIO: ROOT (PODE SER ALTERADA PARA COLOCAR O SEU, CASO TENHA)
//SENHA: masterGodDevSite (PODE SER ALTERADA PARA COLOCAR A SUA, CASO TENHA)
const sequelize = new Sequelize("teste", "root","123456",{
    //CONEXÃO POR LOCALHOST
    host: "localhost",
    //BANCO USADO É O MYSQL
    dialect: "mysql"
});


module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}
