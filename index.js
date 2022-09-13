
//requisição do express, body parser e path
const express = require("express");
const app = express();
const path = require("path");
//const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const Users = require("./models/Users")



//INSTRUÇÕES PARA RENDERIZAR O HTML E CSS
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");


//Configuração do body parser
//ele serve basicamente para pegar dados do form
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//ROTA PRINCIPAL (TELA DE LOGIN)
app.get("/", (req, res) => {
  res.render("./public/index.html");
});


//ROTA PARA O HOME -> AINDA EM CONSTRUÇÃO
app.get("/home", function (req, res) {
  res.render(__dirname + "./public/index.html")
})


//ROTA PARA RECEBER OS DADOS DO CADASTRO
app.post("/formRecebido", function (req, res) {

  //TABELA "USERS" recebe: nome,email,senha e data digitada pelo usuário no cadastro pelas tags de < input >
  Users.create({
    Nome: req.body.nome,
    Email: req.body.email,
    Senha: req.body.senha,
    DataNascimento: req.body.DataN

    //função caso o processo de criação de certo
  }).then(function () {
    res.redirect("./")

    //função caso o processo de criação de errado -> AINDA EM CONSTRUÇÃO
  }).catch(function (erro) {
    res.send("erro" + erro);
  })
})


//ROTA PARA AUTENTICAÇÃO DE LOGIN DO USUÁRIO
app.post("/auth", function (req, res) {

  //VARIÁVEIS PARA RECEBER OS DADOS EMAIL E SENHA DIGITADOS PELO USUÁRIO NA TENTATIVA DE FAZER LOGIN
  var email = req.body.email;
  var senha = req.body.senha;

  //BUSCA NA TABELA "USERS" DO BD PARA PROCURAR SE EXISTE O EMAIL DIGITADO PELO USUÁRIO NO BANCO
  Users.findOne({ where: { Email: email } }).then(user => {
    if (user != undefined) {
      //CASO TENHA, AGORA TEMOS A BUSCA PELA SENHA NO BANCO DE DADOS
      Users.findOne({ where: { Senha: senha } }).then(userS => {
        if (userS != undefined) {
          res.redirect("./home")
        } else {
          //retornoCadastro.textContent = "Erro" 
          res.send("Usuário encontrado, senha errada")
        }
      })
    } else {
      res.send("Você errou, otario!")
    }

  }

  )
});


//PORTA DO SERVIDOR BASTA DIGITAR: "HTTP//:LOCALHOST:3000"
app.listen(3000, () => {
  console.log("servidor rodando")
})


//<------------------------------------------------------------COMANDOS RETIRADOS ABAIXO ------------------------------------------------------->


/*const http = require("http").createServer(app);
const io = require("socket.io")(http);
const errohtml = require("./test");
const { Socket } = require("dgram");*/

//eventos
//var retornoCadastro = document.getElementById("retorno");

//rotas 


/*
app.listen(3000, function () {
  console.log("servidor rodando");
})
*/

/*
app.get("cadastro", function(req,res){
  res.sendFile(__dirname + "/PageFiles/cadastro/cadastroPage.html")
})
*/

/*
io.on('connection',(Socket) =>{


  socket.on("disconnect",() => {
    console.log(data);
    console.log( emailkey + "foi desconectado" + Socket.id)
  })

  socket.on("conectado",() =>{
    console.log(data);
    console.log("usuário conectado");
  })
});
*/