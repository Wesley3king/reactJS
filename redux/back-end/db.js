const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/redux")
.then(()=> console.log("conectado ao DB"))
.catch((e)=> console.log("ERRO de conexão! : ", e));

const Schema = new mongoose.Schema({
    texto:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Texto', Schema);