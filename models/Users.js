const db = require("./db");


//A TABELA QUE ARMEZANA OS DADOS SE CHAMA "USER"
const Users = db.sequelize.define('Users', {
    
    //COLUNAS EXISTENTES NA TABELA
        Nome: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        Email: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        Senha: {
            type: db.Sequelize.STRING,
            allowNull: false
        },
        DataNascimento: {
            type: db.Sequelize.DATE,
            allowNull: false
        }
  });


//COMANDO PERIGOSO, USE APENAS SE VC NÃO POSSUIR A ESTRUTURA ACIMA NO SEU BANCO DE DADOS
//ELE BASICAMENTE SOBREPÕE UM BANCO DE DADOS
//Users.sync({force: false})


module.exports = Users;