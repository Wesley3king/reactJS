const Texto = require("./db");

class Controler {
    constructor (conection) {
        this.texto = conection;

        //this.index = this.index.bind(this.texto);
    };

    index = async (req, res) => {
        const textos = await this.texto.find();
        return res.json({ message: textos});
    };

    createLearning = async (req, res) => {
        const data = await this.texto.create(req.body);
        return res.status(201).json(data);
    }

}

module.exports = new Controler(Texto);