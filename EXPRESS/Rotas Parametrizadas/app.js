const express = require('express');

let app = express();

app.get('/', (req, res)=>res.send('Olá mundo!'));
app.get('/contatos', (req, res)=>res.send('Pagina contatos'));
app.get('/produtos/:id', (req, res) => {
    let id = req.params.id; // criando uma variavel neste caso;
    // ou usando desestruturação,  let {id} = req.params;
    console.log('Eu tenho um produto com o id: ', id);
});
//criando um servidor
app.listen(3000, ()=>console.log('Servidor rodando na porta 3000'))